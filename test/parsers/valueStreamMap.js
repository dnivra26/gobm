const data = {
  "current_pipeline": "shark-ui",
  "levels": [
    {
      "nodes": [
        {
          "name": "git@github.com:Nationstar/jemac.git",
          "node_type": "GIT",
          "instances": [
            {
              "locator": "/go/materials/value_stream_map/b7d782dc7f7792974d99b76bcd7b77712dab63dfa1c0e5e138f73f4da9394bc5/4e6a54f2eba4973cb985b168e2e696ecbb93ae8a",
              "modified_time": "3 days ago",
              "user": "BalajiAS <balajiammanji.sundararaju@nationstarmail.com>",
              "comment": "Tech:Balaji:Notes refactoring part-1 renaming Notes to NoteList. Refactoring is done to avoid notes action triggering the render on child components. Test for this will follow as part of part-2 change",
              "revision": "4e6a54f2eba4973cb985b168e2e696ecbb93ae8a"
            }
          ],
          "depth": 1,
          "parents": [],
          "locator": "",
          "id": "b7d782dc7f7792974d99b76bcd7b77712dab63dfa1c0e5e138f73f4da9394bc5",
          "dependents": [
            "shark-ui"
          ],
          "material_names": [
            "shark-ui"
          ]
        }
      ]
    },
    {
      "nodes": [
        {
          "name": "shark-ui",
          "node_type": "PIPELINE",
          "locator": "/go/tab/pipeline/history/shark-ui",
          "parents": [
            "b7d782dc7f7792974d99b76bcd7b77712dab63dfa1c0e5e138f73f4da9394bc5"
          ],
          "depth": 1,
          "instances": [
            {
              "stages": [
                {
                  "locator": "/go/pipelines/shark-ui/212/unit-test/1",
                  "name": "unit-test",
                  "status": "Passed"
                },
                {
                  "locator": "/go/pipelines/shark-ui/212/package/1",
                  "name": "package",
                  "status": "Passed"
                }
              ],
              "locator": "/go/pipelines/value_stream_map/shark-ui/212",
              "counter": 212,
              "label": "212"
            }
          ],
          "id": "shark-ui",
          "dependents": [
            "shark-functional-test"
          ]
        }
      ]
    },
    {
      "nodes": [
        {
          "name": "shark-functional-test",
          "node_type": "PIPELINE",
          "locator": "/go/tab/pipeline/history/shark-functional-test",
          "parents": [
            "shark-ui"
          ],
          "depth": 1,
          "instances": [
            {
              "stages": [
                {
                  "locator": "/go/pipelines/shark-functional-test/67/deploy/1",
                  "name": "deploy",
                  "status": "Passed"
                },
                {
                  "locator": "/go/pipelines/shark-functional-test/67/smoke/1",
                  "name": "smoke",
                  "status": "Passed"
                }
              ],
              "locator": "/go/pipelines/value_stream_map/shark-functional-test/67",
              "counter": 67,
              "label": "67"
            },
            {
              "stages": [
                {
                  "locator": "/go/pipelines/shark-functional-test/66/deploy/1",
                  "name": "deploy",
                  "status": "Passed"
                },
                {
                  "locator": "/go/pipelines/shark-functional-test/66/smoke/1",
                  "name": "smoke",
                  "status": "Passed"
                }
              ],
              "locator": "/go/pipelines/value_stream_map/shark-functional-test/66",
              "counter": 66,
              "label": "66"
            }
          ],
          "id": "shark-functional-test",
          "dependents": [
            "deploy-shark"
          ]
        }
      ]
    },
    {
      "nodes": [
        {
          "name": "deploy-shark",
          "node_type": "PIPELINE",
          "locator": "/go/tab/pipeline/history/deploy-shark",
          "parents": [
            "shark-functional-test"
          ],
          "depth": 1,
          "instances": [
            {
              "stages": [
                {
                  "locator": "",
                  "name": "deploy-qa",
                  "status": "Unknown"
                },
                {
                  "locator": "",
                  "name": "deploy-uat",
                  "status": "Unknown"
                }
              ],
              "locator": "",
              "counter": 0,
              "label": ""
            }
          ],
          "id": "deploy-shark",
          "dependents": []
        }
      ]
    }
  ]
}

export default data;
