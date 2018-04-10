# easydb-test-suite



This repo hosts the TestCafe tests for the easydb application. The intent is for convenient access of the Jenkins Project to pull the latest changes of every run.



The premise of the Jenkins project below is to outline the technical details involved in each project which runs and manages the TestCafe Continuous Integration project. 
To integrate each project into a new machine, simply follow the steps outlined below in the [Prerequisites](#prerequisites), and set up the rest as specified in  [Installation/Steps](#installation-steps).

## Table of Contents
 - [Information](#information)
 - [Prerequisites](#prerequisites)
 - [Installation/Steps](#installation-steps)
 - [1. Easydb Update Instance](#1-easydb-update-instance)
 - [2. Drop Database for Jenkins](#2-drop-db-for-jenkins)
 - [3. Testcafe Run on Browser](#3-testcafe-run-on-browser)
 - [Running Sequentially](#running-sequentially-optional)
 - [dropdb.sh script in VM](#dropdb-sh-script-in-root-home-of-vm)
 - [Email Tempalte](#email-template)

### Information

---

The URL of the Jenkins project running on PC26 is `10.122.3.176`. 
- Login: admin
- Pass: easydbrules




### Prerequisites

---

Requirements/steps necessary to run the TestCafe CI project on a new host machine (Guide is intended for a Windows PC), steps 8 and 9 are very critical:
Also its helpful for the Virtual Machine to have a static IP address, at the moment the ip is set to: `10.122.4.25`.

1. Establish a user with Administration Rights, and follow all steps as this user.
2. Make sure [Java](https://www.java.com/en/download/manual.jsp) is installed on the new host machine and added to the Environment Path variable.
3. Make sure [Git (for Windows)](http://git-scm.com/download/win ) is installed on the new host machine and added to the Environment Path variable.
4. Make sure [Node.js and NPM](https://nodejs.org/en/) are installed on the new host machine and added to the Environment Path variable.
5. Download of [Cygwin terminal](https://cygwin.com/install.html) with SSH package, preferrably in defualt location "c:/cygwin64".
6. Download and install [Jenkins](https://jenkins.io/download/).
7. The easydb5-testing-vm Virtual Machine must be running, somewhere on the local network.
8. Prevent SSH sign on during run time: create an SSH key for the admin user of the host machine and copy the SSH key to the VM: Open cygwin terminal, run `ssh-keygen`, then `ssh-copy-id root@<ip_of_vm>`.
9. Run Jenkins Manually: stop the Jenkins service in `services.msc`, then restart Jenkins with command `java -jar jenkins.war` in directory "C:\Programm Files (x86)\Jenkins" , this allows Jenkins to have access to local files and directories (cygwin, chrome, firefox, etc) and is a *critical* step to the functionality of this project.
11. Download Email-ext plugin for jenkins. In Manage Jenkins -> Configure System, under SMTP server, type `mail.programmfabrik.de`, under default recipients, type email to recieve test results, follow step [Email Template](#email-template) for further details. 
10. (Optional) Download Multipjob Project plugin for jenkins if you want all projects to run sequentially. See [Running Sequentially](#running-sequentially) for more details.


### Installation/Steps

---

Now we will establish the Jenkins projects which will automate the testing for us. We will create exactly 5 projects, which will be responsible for updating our easydb instance, reseting clearing the schema and dropping the database and restarting the server, and runnning on 4 different browser (Chrome, IE, Edge, and Firefox). To establish these projects, follow these steps.


1. Go to Jenkins at [http://localhost:8080](http://localhost:8080)
2. Sign in
3. Select `New Item`, then `Freestyle Project`.
4. Copy all the contents from projects below into respective field.



### 1. Easydb Update Instance

---

Open a new freestyle project from Jenkins homepage and copy contents into respective fields.

|Section | Option |Content|
|--|--|--|
|Project Name| | instance_update|
|Description|  | This project is designed to update the easydb instance being hosted on the virtual machine easydb5-testing-vm at IP 10.122.4.25 in order to have the latest changes from master. This is accomplished by connecting to the VM via ssh and running two commands which automate the update process.    |
|Options|||
|Source Code Management|||
|Build Triggers|||
|Build Environment|||
|Build|Execute Windows Batch Command | `C:\cygwin64\bin\ssh root@10.122.4.25 '../home/easydb/easydb/5/easydb-server/build/automation/automate.sh git easydb /home/easydb/easydb/5'`	|
||Execute Windows Batch Command|`C:\cygwin64\bin\ssh root@10.122.4.25 '../home/easydb/easydb/5/easydb-server/build/automation/automate.sh make easydb /home/easydb/easydb/5'`|
|Post Build| | .|



### 2. Drop DB for Jenkins

---

Open a new freestyle project from Jenkins homepage and copy contents into respective fields.

|Section | Option |Content|
|--|--|--|
|Project Name| |drop_db|
|Description|  ||
|Options|||
|Source Code Management|||
|Build Triggers|||
|Build Environment|||
|Build|Execute Windows Batch Command| `C:\cygwin64\bin\ssh root@10.122.4.25 './dropdb.sh'`|
|Post Build| | .|




### 3. Testcafe Run on Browser

---

Open a new freestyle project from Jenkins homepage and copy contents into respective fields.

The <BROWSER> input should be either `chrome`,`firefox`,`edge`, or `ie`.

|Section | Option | Content |
|--|--|--|
|Project Name| |  testcafe_runner_chrome |
|Description|  |This project is designed to run the testcafe tests in a specified web browser, the results will be published to an XML file and is viewable in the project workspace, screenshots are taken between every step. The test report will specify in which directory you can find the photos regarding any failed tests. |
|Options|||
|Source Code Management| git | `https://github.com/programmfabrik/easydb_test_suite`|
|Build Triggers|||
|Build Environment|||
|Build|Execute Windows Batch Command| `npm install testcafe@0.18.6 testcafe-reporter-xunit`	|
||Execute Windows Batch Command|`node_modules/.bin/testcafe <BROWSER> test_suite_head_screenshots/**/* --screenshots ../results_screenshots -r xunit:results_<BROWSER>.xml`|
|Post Build|Publish JUnit test result report| `results_<BROWSER>.xml`|
||Editable Email Notification| Default Content |




### Running Sequentially (Optional)

---

This section describes how to have all subprojects running in one continuous master project with the use of the Multijob Plugin from Jenkins.

|Step|Project|Reason|
|--|--|--|
|1| instance_update| Get the latest code from Master.|
|2|drop_db| The instance has been updated, but the schema must be reset in order for the tests to function (building a datamodel is part of the tests which would be upset by an already existing datamodel) |
|3|testcafe_runner_chrome|Run tests on Chrome|
|4|drop_db| Reset the schema, as not to interfere with new tests.|
|5|testcafe_runner_firefox|Run tests on Firefox|
|4|drop_db|Reset the schema, as not to interfere with new tests.|
|5|testcafe_runner_ie| Run tests on Internet Explorer|


### dropdb.sh script in root/home of VM

---

This script presides in the home/ directory of the root user for the easydb5-testing-vm. It is necessary to use the root user because certain sudo commands are involved in the script.

```bash

#Stop Screen
sudo -u easydb screen -S easydbrunner -X quit
#Delete User Schema
dr="../home/easydb/easydb/schema/*"
sudo rm -rf $dr
#Drop Database
psql --u postgres -p 5432 << EOF
    drop database "easy5-testing";
    create database "easy5-testing";
EOF
dr="../home/easydb/easydb/5/easydb-server/src/imexporter/"
#Restart Screen
(cd $dr && sudo -u easydb screen -S easydbrunner -d -m "./easydb-server")

```


### Email Template

Copy the email template, saved as `groovy.template`, into the `$JENKINS_HOME/email-templates` directory. Considering you followed step 9 of the prerequisites, the `$JENKINS_HOME` path should be `c:\Users\<your_user>\.jenkins\`. 

If the `email-templates` directory does not exist, create it in `$JENKINS_HOME`.

Go to Manage Jenkins -> Configrue System -> Extended E-Mail Notification, under Default Content, type `${SCRIPT, template="groovy.template"}`. Save.
