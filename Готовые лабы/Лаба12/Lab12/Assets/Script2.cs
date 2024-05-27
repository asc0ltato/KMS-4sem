using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Script2 : MonoBehaviour {
    public float speed = 0.1f;

    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        float x = Input.GetAxis("Horizontal") * speed;
        float z = Input.GetAxis("Vertical") * speed;
        transform.Translate(x, 0, z);

        float mX = Input.GetAxis("Mouse X");
        transform.Rotate(mX, 0, 0);
        Mathf.Clamp(mX, 0, 90);
    }
}
