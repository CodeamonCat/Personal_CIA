from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import datetime
import subprocess
import os
import openai


# company_name=""
# industry=""
openai.api_key=""
agent_stack=[]
agent_progress=[]
agent_number=0
model = "text-davinci-003"
temperature = 0.5
max_tokens = 4096
step_mem=[]


x = datetime.datetime.now()

app = Flask(__name__)
CORS(app)

@app.route('/') 
def index():
	return render_template('../web/src/index.js')

@app.route('/get_text', methods=['GET'])
def get_text():
    file_path = './summary.txt'
    with open(file_path, 'r') as file:
        content = file.read()
    return jsonify({'text': content})

@app.route('/data')
def get_time():

	return {
		'Name':"geek",
		"Age":"22",
		"Date":x,
		"programming":"python"
		}

@app.route('/new_mission', methods=['POST'])
def new_mission():
	# post input type: json
    # { 
    #   prompt: string 
    #   attempt: int 
    # }
    prompt = request.form.get('prompt')
    attempt = request.form.get('attempt')
    # create file data
    current_time = datetime.datetime.now()
    time_string = current_time.strftime("%Y-%m-%d-%H:%M:%S")
    file_name=time_string+"_done.txt"
    in_file_name=time_string+"_in.txt"
    out_file_name=time_string+"_out.txt"
    agent_stack.append(time_string)
    step_mem.append(attempt)
    with open("in_file_name", "w") as file:
        file.write("n\ngeneral ai\nresearcher\n")
        file.write(prompt+" and output it to "+file_name+"\n\ny -"+attempt)
    os.chdir(os.path.dirname(""))
    command = "nohup ./home/bacon/Auto-GPT/run.sh < /home/bacon/Auto-GPT/test_io/"+in_file_name+" > /home/bacon/Auto-GPT/test_io/"+out_file_name
    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, shell=True)
    agent_number += 1

@app.route('/scan_process', methods=['GET'])
def scan_process():
    for i in len(agent_stack):
        file_path = "/home/bacon/Auto-GPT/auto_gpt_workspace/"+agent_stack[i]+"_done.txt"
        agent_progress.clear()
        if os.path.isfile(file_path):
            agent_progress.append(1)
        else:
            agent_progress.append(0)
    return {'agent_progress': agent_progress}

@app.route('/delete_mission', methods=['POST'])
def delete_mission():
    # post input type: json
    # {
    #   index: int
    # }
    index = request.form.get('prompt')
    # delete agent and files
    file_path = "/home/bacon/Auto-GPT/auto_gpt_workspace/"+agent_stack[index]+"_done.txt"
    os.remove(file_path)
    agent_stack.pop(index)
    agent_progress.pop(index)
    step_mem.pop(index)
    agent_number -=1

@app.route('/summary', methods=['POST'])
def summary():
    # post input type: json
    # {
    #   indeces: list of integer
    # }
    indices = request.form.get('indices')
    #
    data_to_sent=""
    for i in len(indices):
        file_path = "/home/bacon/Auto-GPT/auto_gpt_workspace/"+agent_stack[indices[i]]+"_done.txt"
        with open(file_path, "r") as file:
            data_to_sent+= file.read()
    prompt="please summarize the following passage:"+data_to_sent
    response = openai.Completion.create(engine=model,prompt=prompt,temperature=temperature,max_tokens=max_tokens)

    # output: long string
    return {'summary': response.choices[0].text}

if __name__ == "__main__":
	app.run(debug=True)
