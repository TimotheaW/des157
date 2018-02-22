var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth-5000, window.innerHeight-5000 );
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

var scene = new THREE.Scene();

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial( { color: 0xffffff } );

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

var line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );
