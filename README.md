# reactjs-app
This project utilizes github actions to create a CICD pipeline using an AWS EC2 instance and docker.<br>
<br>
Through a .yaml file, we log into docker and run our docker image:<br>
<img width="648" alt="Screen Shot 2024-05-13 at 4 19 35 PM" src="https://github.com/tmglouner/reactjs-app/assets/166273662/9d4fd59a-460d-4f19-a38d-02443c9f9d0b">
<br>
<br>
We then delete our old docker container and run our new docker container on our AWS EC2 instance:<br>
<img width="590" alt="Screen Shot 2024-05-13 at 4 19 46 PM" src="https://github.com/tmglouner/reactjs-app/assets/166273662/63a4df98-4457-432f-adcd-38ce63d453ea">
<br>
<br>
Through Github Actions, we can see our CICD workflow ran suggessfully:<br>
<img width="333" alt="Screen Shot 2024-05-10 at 8 31 40 PM" src="https://github.com/tmglouner/reactjs-app/assets/166273662/aba4d506-524c-41ee-b9aa-be85db3199a3">
<br>
<br>
The web application itself is a simple React app that I run locally using NodeJS and NPM.<br> 
Additionally, I have the React app hosted on AWS Amplify:<br>
https://main.d3hrsc3qify77y.amplifyapp.com
