'use strict'

console.log("hello");

//set up basic scene
var renderer, scene, camera, light;
var cube;

//set up rotations and mouseX for orbit controls
var targetRotation, targetRotationOnMouseDown, mouseX, mouseXOnMouseDown;

//raycaster (for mouse hover)
var raycaster, mouse, INTERSECTED;

init();
animate();

function init(){
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(
		75,	//field of view/viewport
		window.innerWidth/window.innerHeight, //aspect ratio
		0.1,	//near
		1000	//far
	);
	camera.position.z = 100;

	//renderer
	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor( 0xB2C2F1 );
	document.body.appendChild(renderer.domElement);

	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render);
	renderer.render(scene, camera);

	//CUBE
	var geometry = new THREE.BoxGeometry(20,20,20);
	var color = new THREE.Color("#282130"); // set the color of the material
	var material = new THREE.MeshLambertMaterial({color: color.getHex()});
	var cube = new THREE.Mesh(geometry, material);


	//set up point light
	light = new THREE.PointLight(0xffffff);
	light.position.set(25,25,25);
	scene.add(light);

	//orbit control rotations on 'mousedown'
	targetRotation = 0;
	targetRotationOnMouseDown=0;

	mouseX=0;
	mouseXOnMouseDown =0;

	//raycaster for hover effect
	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();
	INTERSECTED;

	//rotate CUBE
	cube.rotation.x += 0.45;
	cube.rotation.y += -0.5;
	scene.add(cube);

}


function onMouseMove(event){
	//calculate mouse position in normalized device coordinates
	//(-1 to +1) for both components
	mouse.x = (event.clientX/window.innerWidth)*2-1;
	mouse.y = -(event.clientY/window.innerHeight)*2+1;
}


function animate(){
	requestAnimationFrame (render);
	render();
}


function render() {
	cube.rotation.x += (targetRotation - cube.rotation.y)*0.04;

	//update the r=picking ray with the camera and mouse position
	raycaster.setFromCamera(mouse,camera);

	//calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects(scene.children);
	for(var i=0;i<intersects.length; i++){
		cube.rotation.x+=0.5;
	}
	renderer.render(scene,camera);
}

window.addEventListener("mousemove", onMouseMove, false);
window.requestAnimationFrame(render);
render();
