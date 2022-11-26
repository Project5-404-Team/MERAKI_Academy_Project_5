<p align="center">
  <a href="" rel="noopener">
 <img width=300px height=300px src="https://res.cloudinary.com/dfpuepvtg/image/upload/v1669457860/hireMeLogoDARKMODE_tcakwu.svg" alt="Project logo"></a>
</p>

<h3 align="center">Hire me</h3>

---

<p align="center"> A Job search application that will make a change ...
    <br> 
<a href=''>Demo</a>
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [User Story](#user_story)
- [Data Flow](#data_flow)
- [Guided By](#guided_by)

## 🧐 About <a name = "about"></a>

We help job **seekers** and **companies** to get their common benefit in an easy to use application that named **Hire Me**

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Visual Studio Code follow this <a href='https://code.visualstudio.com/Download'>link</a> to install.
- Git Bash follow this <a href='https://git-scm.com/downloads'>link</a> to install.
- Node.js follow this <a href='https://nodejs.org/en/download/'>link</a> to install.

### Installing:

1. Clone the repo to your local machine using git bash.

```
git clone https://github.com/Project5-404-Team/MERAKI_Academy_Project_5.git
```

2. Install packeges repeat this step in backend and frontend folder

```
Backend:

npm i
npm i cors
npm i express
npm i nodemon
npm i pg
npm i dotenv
npm i jsonwebtoken
npm i bcrypt
npm i socket.io
------------------------
Frontend :
npm i react
npm i react-router-dom
npm i axios
npm i socket.io-client
npm i cloudinary
npm i react-redux
npm i @reduxjs/toolkit
npm i @react-oauth/google
npm i emailjs-com
```

3. Run server using git bash inside backend folder

```
npm run dev
```

4. Run application using git bash inside frontend folder

```
npm start
```

Now app ready to use

## 🎈 Usage <a name="usage"></a>

- On the main page You Have to Choose what kind of user  are you ! if you are looking for Job Click on  **Job seeker**  , else if you are a company that offer job vacancies click on  **Employer**
                                    
<img   width=300  src="frontend\public\Readme Pictures\MainPage.png" >


- After choosing even if ***Employer*** or ***Job seeker*** , The application will navigate you to  **Login** page  , if you already have an account just enter your email and password and enjoy  our amazing  app !
                                    
<img   width=300  src="frontend\public\Readme Pictures\jobSeekerLogin.png" >
<img   width=300  src="frontend\public\Readme Pictures\employerLogin.png" >

- Don't have an account ? , its okay just click on **Register**  , that will navigate you to   **Register** page , fill those field inside the picture below , then Click on the Button **Register** OR you can register with your google account by clicking on **Register with google**
                                    
<img   width=300  src="frontend\public\Readme Pictures\registerCompanies.png" >
<img   width=300  src="frontend\public\Readme Pictures\registerUsers.png" >

- Congratulations !   now You became one of our Family After You complete  Registration the app will Navigate you to **Login Page** , 
fill login fields to access our amazing  Features!


- Welcome ! After You complete  Login the app will Navigate you to the **Home Page**
now we have 2 different structure for users ! 
<br>
For now lets assume that you were a ***Job seeker*** , here is the 
***Job seeker*** **Home Page** <br>
<img   width=300  src="frontend\public\Readme Pictures\jobSeekerHome.png" >


- As you see , you can browse jobs from all companies that are hiring at the moment , each job has 3 main fields , <br> 1- ***job title*** <br>2- ***company name*** <br> 
3- ***Add to favorite button***


                                    
<img   width=300  src="frontend\public\Readme Pictures\job.png" >

- By clicking on ***Job title*** the app will navigate you to the full information about that job , there you can see full job information with company information too , you can apply for job by clicking on button **Apply for job** 
    
<img   width=300  src="frontend\public\Readme Pictures\jobInfoUser.png" >

<br>

- **NOTE** once you register - login on the navbar you will see **Complete my account** , there the app will ask you to add an additional information , if your account is not completed you will not be able to apply for any job  (you will not be able to see the apply button)
                                

<img   width=300  src="frontend\public\Readme Pictures\completeAccount.png" >
<img   width=300  src="frontend\public\Readme Pictures\completeAccount1.png" >

- By clicking on ***Company info*** the app will navigate you to the full information about The company and there you can send a real time communication  message by clicking on **Send message** button

                                    
<img   width=300  src="frontend\public\Readme Pictures\companyInformationUser.png" >

- You can manage your message list by clicking on messages on navbar , there you can find , reply , manage your conversations 

                                    
<img   width=300  src="frontend\public\Readme Pictures\msg1.png" >
<img   width=300  src="frontend\public\Readme Pictures\msg2.png" >

- You can manage your account and edit your information by clicking on my account on the navbar , that will redirect  you to your account where you can edit information by clicking ***Edit my information*** button

                                    
<img   width=300  src="frontend\public\Readme Pictures\myAccountUser.png" >

- On the left side of the home page you will be able to see a filter that will give you the jobs by its industry , and you can search for anything you want in the search bar above 

                                    
<img   width=300  src="frontend\public\Readme Pictures\searchUsers.png" >



- You can manage , delete your job application by clicking on my applied jobs on the navbar , and you can manage , delete your favorite jobs by clicking on my favorite jobs on the nav bar

                                    
<img   width=300  src="frontend\public\Readme Pictures\favusers.png" >
<br>
<br>
<br>
<br>
<br>

- **NOW lets assume that you are a Company**
 here is the 
***Employer*** **Home Page** 
 As you see , you can browse job seekers  that are looking for job at the moment 

<img   width=300  src="frontend\public\Readme Pictures\employerHome.png" >


- By clicking on  ***Job seeker***  name , the application will navigate you to see his full profile and Download his CV directly
by pressing on **Download Cv** button
                                    
<img   width=300  src="frontend\public\Readme Pictures\userProfileCompanyApp.png" >


- You can manage , delete , edit , add new job by clicking  on the Job section on navbar
                                    
<img   width=300  src="frontend\public\Readme Pictures\addJob.png" >

- You can manage your incoming  job applications by clicking  on the Job applications section on navbar , 
this page will show you the job seeker full profile , download his Cv and the job that he applied on 
                                    
<img   width=300  src="frontend\public\Readme Pictures\jobapplications.png" >

<br>
<br>

- Now you ready to enjoy and discover our application amazing Features ! 
<br>
<br>
## ⛏️ Built Using <a name = "built_using"></a>

- [ElephantSQL](https://www.elephantsql.com/) - Database
- [Express JS](https://expressjs.com/) - Server Framework
- [React JS](https://https://reactjs.org/) - Web Framework
- [Node JS](https://nodejs.org/en/) - Server Environment

## User Story <a name = "#user_story"></a>

Your trello board link
<a href='https://trello.com/b/7fEJ0OPZ/merakiacademyproject5'>Trello</a>

## Data Flow <a name = "#data_flow"></a>

<img width=500px height=200px src="https://trello.com/1/cards/6362d0b0a1f21a007dbf2798/attachments/6362d0c6a3ef16019bd0ecbc/previews/6362d0c7a3ef16019bd0ecdf/download/Untitled.png" alt="Diagram"></a>

## ⚠️ Guided By <a name = "guided_by"></a>

This project is guided by ©️ **[MERAKI Academy](https://www.meraki-academy.org)**
