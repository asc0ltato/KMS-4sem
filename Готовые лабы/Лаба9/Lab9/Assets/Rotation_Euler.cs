using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotation_Euler : MonoBehaviour {

    private Vector3 currentRotation;

    // Use this for initialization
    void Start()
    {
        currentRotation = transform.eulerAngles;
    }

    // Update is called once per frame
    void Update () {
        currentRotation += new Vector3(5, 0, 5);
        transform.eulerAngles = currentRotation;
    }
}
