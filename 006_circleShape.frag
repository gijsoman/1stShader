#ifdef GL_ES
precision mediump float;
#endif

uniform  vec2 u_resolution;
uniform  vec2 u_mouse;

float circleShape(vec2 position, float radius){
    //return step(radius, length(position - (u_resolution / 2.0)));
    return step(radius, length(position - (u_resolution / 2.0)));
}

void main(){
    vec2 position = gl_FragCoord.xy;

    vec3 color = vec3(0.0, 0.0, 0.0);

    float circle = circleShape(position, 100.0);

    color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}

//So in short:
//The length between the current position (the current fragment (current pixel) gl_FragCoord.xy) and our own defined origin point (in this case the resolution /2.0
//which comes down to 500 500 is calculated.
//This returns something above or below our radius (in this case 100).
//The step function checks if this length between the current position and our origin is more or less than 100 away from our origin (the resolution / 2.0 (500, 500)) 
//If its smaller than 100 paint it black. If its taller than 100 paint it white.