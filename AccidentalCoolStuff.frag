#ifdef GL_ES
precision mediump float;
#endif

uniform  vec2 u_resolution;
uniform  vec2 u_mouse;

float circleShape(vec2 position, float radius){
    //return step(radius, length(gl_FragCoord.xy - (u_resolution / 2.0)));
    return smoothstep(length(gl_FragCoord.xy - (u_resolution / 2.0) - u_mouse) , length(gl_FragCoord.xy - (u_resolution / 2.0) + u_mouse), radius);
}

void main(){
    vec2 position = gl_FragCoord.xy;

    vec3 color = vec3(0.0, 0.0, 0.0);

    float circle = circleShape(position, 100.0);

    color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}