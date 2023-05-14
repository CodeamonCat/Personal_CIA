from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
import datetime
import subprocess
import os
import openai


# company_name=""
# industry=""
### config ###################################
debug_mode = False
AUTO_GPT_PATH = '/home/bacon/Auto-GPT'
##############################################

with open("backend/openai.api_key","r") as f:
    api_key = f.read()
    openai.api_key=api_key
agent_dates=[datetime.datetime.now().strftime("%Y-%m-%d-%H:%M:%S")]
agent_prompt=['Collect and analyze data for a single investment target or an expanded target set by adding one more target.']
agent_step=[10]
agent_status=[0]
agent_number=1
model = "text-davinci-003"
temperature = 0.5
max_tokens = 4096


# x = datetime.datetime.now()

app = Flask(__name__)
# Set CORS options on app configuration
CORS(app, support_credentials=True)
app.config['CORS_HEADERS'] = "Content-Type"
app.config['CORS_RESOURCES'] = {r"/api/*": {"origins": "http://localhost:3000"}}

@cross_origin(supports_credentials=True)

# @app.before_request
# def handle_preflight():
#     if request.method == "OPTIONS":
#         res = Response()
#         res.headers['X-Content-Type-Options'] = '*'
#         return res
    
# @app.before_request
# def basic_authentication():
#     if request.method.lower() == 'options':
#         return Response()

@app.route('/') 
def index():
	return render_template('../web/src/index.js')

@app.route('/get_text', methods=['GET'])
def get_text():
    file_path = './backend/summary.txt'
    with open(file_path, 'r') as file:
        content = file.read()
    return jsonify({'text': content})

@app.route('/api/new_mission', methods=['POST', 'OPTIONS'])
@cross_origin(origin='http://localhost:3000', supports_credentials=True, headers=['Content- Type'])
def new_mission():
    global agent_number
    if request.method == 'POST':
        # post input type: json
        # { 
        #   prompt: string 
        #   attempt: int 
        # }
        prompt = request.json.get('businessDescription')
        attempt = request.json.get('numberOfAttempts')
        # create file data
        current_time = datetime.datetime.now()
        time_string = current_time.strftime("%Y-%m-%d-%H:%M:%S")
        agent_dates.append(time_string)
        agent_prompt.append(prompt)
        agent_step.append(attempt)
        agent_status.append(0)
        agent_number_tmp = agent_number
        agent_number += 1 

        if debug_mode == False:
            file_name=time_string+"_done.txt"
            in_file_name=time_string+"_in.txt"
            out_file_name=time_string+"_out.txt"
            # get current dir
            cwd = os.getcwd() 

            # change dir to Auto-GPT
            os.chdir(AUTO_GPT_PATH) 
            print(os.getcwd())
            with open("./test_io/"+in_file_name, "w") as file:
                file.write("n\ngeneral ai\nresearcher\n")
                file.write(prompt+" and output it to "+file_name+"\n\ny -"+str(attempt))
            command = "nohup ./run.sh < ./test_io/"+in_file_name+" > ./test_io/"+out_file_name
            result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, shell=True)
            
            # check if process is done or error
            file_path = "./auto_gpt_workspace/"+agent_dates[agent_number_tmp]+"_done.txt"
            if os.path.isfile(file_path):
                agent_status[agent_number_tmp] = 1
            else:
                agent_status[agent_number_tmp] = -1

            # return to project dir
            os.chdir(cwd)

            

        return jsonify({'name':prompt,'date':time_string,'status':0}), 200
    return 'Error', 400

@app.route('/api/missions', methods=['GET'])
def missions():
    for i in range(agent_number):
        file_path = "/home/bacon/Auto-GPT/auto_gpt_workspace/"+agent_dates[i]+"_done.txt"
        if os.path.isfile(file_path):
            agent_status[i] = 1
        else:
            agent_status[i] = -1
    
    mission_list = [{
                     'id' : i,
                     'selected': False,
                     'name': agent_prompt[i],
                     'status': ('Completed' if agent_status[i] == 1 else 'Failed' if agent_status[i] == -1  else 'Processing'),
                     'createdAt': agent_dates[i]
                     } for i in range(agent_number)]
    print(mission_list)
    return jsonify(mission_list), 200

@app.route('/api/scan_process', methods=['GET'])
def scan_process():
    for i in range(agent_number):
        file_path = "/home/bacon/Auto-GPT/auto_gpt_workspace/"+agent_dates[i]+"_done.txt"
        if os.path.isfile(file_path):
            agent_status[i] = 1
        else:
            agent_status[i] = 0
    return jsonify({'agent_status': agent_status}), 200

@app.route('/api/delete_mission', methods=['POST'])
def delete_mission():
    # post input type: json
    # {
    #   index: int
    # }
    index = request.json.get('index')
    # delete agent and files
    file_path = "/home/bacon/Auto-GPT/auto_gpt_workspace/"+agent_dates[index]+"_done.txt"
    os.remove(file_path)
    agent_dates.pop(index)
    agent_prompt.pop(index)
    agent_status.pop(index)
    agent_step.pop(index)
    agent_number -=1
    return jsonify({'success':True}), 200


@app.route('/api/summary', methods=['POST'])
def summary():
    # post input type: json
    # {
    #   indeces: list of integer
    # }
    indices = request.json.get('indices')
    #
    if len(indices) <= 0:
        return jsonify({'error': "no indices is selected"}), 400

    if debug_mode == False:
        # get current dir
        cwd = os.getcwd() 

        # change dir to Auto-GPT
        os.chdir(AUTO_GPT_PATH) 

        data_to_sent=""
        for i in range(len(indices)):
            file_path = "./auto_gpt_workspace/"+agent_dates[indices[i]]+"_done.txt"
            with open(file_path, "r") as file:
                data_to_sent+= file.read()
        prompt="please summarize the following passage:"+data_to_sent
        response = openai.Completion.create(engine=model,prompt=prompt,temperature=temperature,max_tokens=max_tokens)

        # return to project dir
        os.chdir(cwd)

    # output: long string
    if debug_mode == False:
        return jsonify({'summary': response.choices[0].text}), 200
    else:
        return jsonify({'summary': "alert this"}), 200

if __name__ == "__main__":
	app.run(debug=True)
