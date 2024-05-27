using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TankShooting : MonoBehaviour
{
    public GameObject core;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Vector3 forwardofstvol = transform.position + transform.TransformDirection(Vector3.up * 4f);
            GetComponent<AudioSource>().PlayOneShot(GetComponent<AudioSource>().clip);
            Instantiate(core, forwardofstvol, transform.rotation);
        }
    }
}