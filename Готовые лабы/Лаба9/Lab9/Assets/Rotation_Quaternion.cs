using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotation_Quaternion : MonoBehaviour {

    Quaternion fixedAngle;
    private float rotationAngle = 5;

	// Use this for initialization
	void Start () {
        fixedAngle = transform.rotation;
	}
	
	// Update is called once per frame
	void Update () {
        Quaternion rotationX = Quaternion.AngleAxis(rotationAngle, Vector3.right);
        Quaternion rotationZ = Quaternion.AngleAxis(rotationAngle, Vector3.forward);

        transform.rotation *= rotationX * rotationZ;
    }
}
