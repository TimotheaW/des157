'use strict'

console.log("hello");

//set up basic scene
var renderer, scene, camera, light, light2;

//objects
var cube, polygon;

//set up rotations and mouseX for orbit controls
var targetRotation, targetRotationOnMouseDown, mouseX, mouseXOnMouseDown;

//raycaster (for mouse hover)
var raycaster, intersects, mouse, INTERSECTED;

init();

//function 1. Initialize scene and objects
function init() {
  var container = document.getElementById('container');
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    45, //field of view/viewport
    window.innerWidth / window.innerHeight, //aspect ratio
    0.1, //near
    1000 //far
  );
  camera.position.z = 100;

  //CUBE
  var geometry = new THREE.BoxGeometry(20, 20, 20);
  var color = new THREE.Color("#482C69"); // set the color of the material
  var material = new THREE.MeshLambertMaterial({
    color: "#482C69"
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  //set up point light and ambient light so that the cube can be seen
  light = new THREE.PointLight(0xffffff, 0.6);
  light.position.set(25, 25, 25);
  scene.add(light);

  //soft white light
  light2 = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(light2);

  //polygon
  var geometry = new THREE.SphereGeometry(12);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
  });
  var polygon = new THREE.Mesh(geometry, material);
  var size = true;
  scene.add(polygon);
  polygon.position.z = 26;


  //renderer
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xB2C2F1);
  document.body.appendChild(renderer.domElement);

  //OrbitControl library allows for mouse interaction to click and drag the objects in the scene
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  renderer.render(scene, camera);

  //orbit control rotations on 'mousedown'
  targetRotation = 0;
  targetRotationOnMouseDown = 0;

  mouseX = 0;
  mouseXOnMouseDown = 0;

  //raycaster for hover effect
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  INTERSECTED;
}

//function 2. Tracking mouse position for interaction
function onMouseMove(event) {
  //calculate mouse position in normalized device coordinates; (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

//function 3. Rendering the scene
function render() {
  requestAnimationFrame(render);

  //commented out __.rotation._ code below was part of original intention to have objects rotate, but I kept getting an error that said it couldn't read the 'rotation' property. I have a version of some of the rotate code that works but in the end I couldn't get it to work here.
  // polygon.rotation.x +=0.001;
  // polygon.rotation.y +=0.001;
  // if (polygon.scale.x <=-1.2){
  // 	size=false;
  // } else if (polygon.scale.x >=1.2) {
  // 	size=true;
  // }
  // if (size) {
  // 	polygon.scale.x -= 0.001;
  // 	polygon.scale.y -= 0.001;
  // 	polygon.scale.z -= 0.001;
  // } else {
  // 	polygon.scale.x += 0.001;
  // 	polygon.scale.y += 0.001;
  // 	polygon.scale.z += 0.001;
  // }
  renderer.domElement.id = 'bg';
  // cube.rotation.x += (targetRotation - cube.rotation.y)*0.04;

  //update the r=picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  //calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects(scene.children);
  for (var i = 0; i < intersects.length; i++) {
    // cube.rotation.x+=0.5;
  }
  renderer.render(scene, camera);
}

window.addEventListener("mousemove", onMouseMove, false);
render();
