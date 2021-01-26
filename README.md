
# Asset CPU and Memory Dashboard	
Single page application showing a live feed of CPU and memory usage on devices and their running programs.  
Design based on a [Kubernetes resources dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/).

## Features
- Any device can be selected from the left hand side, after which the device's CPU, memory and programs are then shown.
- The CPU and memory usage updates each minute and the programs table can be sorted on each column.
- Pressing the hamburger in the top left hand corner show/hides the device list panel.

## Hosting
See the app hosted [here](https://device-dashboard-pr.netlify.app)

## Screenshot(s):
![Screenshot one](/assets/screenshots/Screenshot_1.png)

## How to run:

 1. Clone this repo ```git clone https://github.com/patrivet/assets_dashboard.git```
 2. Change to the assets_dashboard directory e.g. ```cd assets_dashboard```
 3. Install ```npm install```
 4. Run app ```npm start```
 
## Built using:
- [React v17.0.1](https://reactjs.org/)
- [React-Context](https://reactjs.org/docs/context.html)
- [Material-UI](https://material-ui.com/)
- [Apex Charts](https://apexcharts.com/)

## Created by: 
Pat Rivet: [Github](https://github.com/patrivet/) | [Linkedin](https://www.linkedin.com/in/pat-rivet/)
