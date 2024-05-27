using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Script : MonoBehaviour {
    public float speed = 0.1f;
    public GameObject Cube1;
    public GameObject Cube2;
    public Texture texture;

    // Use this for initialization
    void Start () {

    }

    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal") * speed;
        float z = Input.GetAxis("Vertical") * speed;
        transform.Translate(x, 0, z);

        float mX = Input.GetAxis("Mouse X");
        float mY = Input.GetAxis("Mouse Y");
        mY = Mathf.Clamp(mY, 0, 90);
        transform.Rotate(mX, mY, 0);

        if (Input.GetKeyDown(KeyCode.Q))
        {
            Cube2.GetComponent<Renderer>().material.mainTexture = texture;
        }
    }

    void OnCollisionEnter(Collision col) {  
		if (col.gameObject.name == "Cube1")
		{ 
			col.gameObject.GetComponent<Renderer>().material.color = new Color(1, 0, 0); 
		}

        if (col.gameObject.name == "Cube2")
        {
            col.gameObject.GetComponent<Renderer>().material.mainTexture = texture;
        }
    }
}
