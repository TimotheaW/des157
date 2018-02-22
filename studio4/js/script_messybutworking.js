'use strict'

console.log("hello");

//set up basic scene
var renderer, scene, camera;

//set up rotations and mouseX for orbit controls
var targetRotation, targetRotationOnMouseDown;

//raycaster (for mouse hover)
var raycaster, mouse, INTERSECTED;



var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth/window.innerHeight,
	0.1,
	1000
);

camera.position.z = 100;

var targetRotation = 0;
var targetRotationOnMouseDown=0;

var mouseX=0;
var mouseXOnMouseDown =0;

//raycaster --> mouse picking
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var INTERSECTED;

function onMouseMove(event){
	//calculate mouse position in normalized device coordinates
	//(-1 to +1) for both components

	mouse.x = (event.clientX/window.innerWidth)*2-1;
	mouse.y = -(event.clientY/window.innerHeight)*2+1;
}


var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0xB2C2F1 );
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

var geometry = new THREE.BoxGeometry(20,20,20);
var color = new THREE.Color("#282130"); // set the color of the material
var material = new THREE.MeshLambertMaterial({color: color.getHex()});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


var light = new THREE.PointLight(0xffffff);
light.position.set(25,25,25);
scene.add(light);

//rotate cube1
cube.rotation.x += 0.45;
cube.rotation.y += -0.5;


var render = function () {
  requestAnimationFrame( render );
	cube.rotation.x += (targetRotation - cube.rotation.y)*0.04;

	//update the r=picking ray with the camera and mouse position
	raycaster.setFromCamera(mouse,camera);

	//calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects(scene.children);
	for(var i=0;i<intersects.length; i++){
		cube.rotation.x+=0.5;
	}
  renderer.render(scene, camera);
}

window.addEventListener("mousemove", onMouseMove, false);
window.requestAnimationFrame(render);
render();

//ADD CLICK TO CHANGE COLOR OF CUBE
