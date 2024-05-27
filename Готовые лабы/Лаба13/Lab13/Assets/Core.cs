using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Core : MonoBehaviour
{
    float coreSpeed = 1f;
    public GameObject exp1;
    // Use this for initialization
    void Start()
    {
        Destroy(gameObject, 5f);
    }

    // Update is called once per frame
    void Update()
    {
        transform.position += transform.TransformDirection(Vector3.forward * coreSpeed);
    }

    private void OnCollisionEnter(Collision col)
    {
        if (col.gameObject.tag == "drag")
        {
            col.gameObject.GetComponent<Renderer>().enabled = false;
            col.gameObject.GetComponent<AudioSource>().PlayOneShot(col.gameObject.GetComponent<AudioSource>().clip);
            Instantiate(exp1, gameObject.transform.position, gameObject.transform.rotation);
        }
    }
}