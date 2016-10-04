# Meteor14_OpenShift

**How to deploy the Meteor 1.4 application into the RedHat OpenShift Cloud.**

**EARLY BETA - JUST FOR TESTING PURPOSES** 

Repo is a direct replacement of the freshly pulled OpenShift nodejs cartridge (Node.js Auto-Updating) by **icflorescu**.

It's goal is to enable the Meteor 1.4 apps to be deployed into the OS cloud.

**Install and deploy steps:**

1. Create new OpenShift App based on 2 cartridges: "Node.js Auto-Updating" & "Cron"
2. Pull the newly created App repo into the local folder.
3. Pull this repo from GitHub into the other local folder.
4. Copy (and overwrite) this repo files into original OS repo folder.
5. You may test the config now by committing changes then pushing the repo back to OpenShift. There should be some NPM installation messages, then the original nodejs server should be started (as there is no meteor app at this time).
6. Once you have got the modified repo working, build your Metero 1.4 app for Linux platform using command like that:

        echo "*** Building ***"
        meteor build ../tmp --directory --architecture os.linux.x86_64

7. Then copy just build code into your repo folder.
      
        echo "*** Copying files ***"
        yes | cp -rf ../tmp/bundle/*  ../your_repo_folder_name/

8.  Your repo folder should looks like that now:
        
        /server  
        /programs  
        /static  
        /utils
        app.js  
        LICENSE  
        main.js  
        meteorApp.js  
        package.json  
        README  
        star.json  
        start.js  

9. If so you may push your repo back into the cloud 

So you are almost done now, but have a look into the
        
        meteorApp.js file. 

Thee are some ENV variables to be configured.

**Sources:**

[Original code](https://github.com/icflorescu/openshift-cartridge-nodejs) by **icflorescu**

[**OpenShift cartridge**](https://hub.openshift.com/quickstarts/243-node-js-latest) to be used first.

