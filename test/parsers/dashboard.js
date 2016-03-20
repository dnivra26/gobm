const data = {
  "_links": {
    "self": {
      "href": "http://104.40.19.175:8153/go/api/dashboard"
    },
    "doc": {
      "href": "http://api.go.cd/current/#dashboard"
    }
  },
  "_embedded": {
    "pipeline_groups": [
      {
        "_links": {
          "self": {
            "href": "http://104.40.19.175:8153/go/api/config/pipeline_groups"
          },
          "doc": {
            "href": "http://api.go.cd/current/#pipeline-groups"
          }
        },
        "name": "sphinx",
        "_embedded": {
          "pipelines": [
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/sphinx-ui/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/unpause"
                }
              },
              "name": "sphinx-ui",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/instance/218"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ui/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/sphinx-ui/218"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/sphinx-ui/217/with/218"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/sphinx-ui/218/build_cause"
                      }
                    },
                    "label": "218",
                    "schedule_at": "2016-03-18T06:22:56.826Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sphinx-ui/218/unit-test/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "unit-test",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sphinx-ui/218/package/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "package",
                          "status": "Failed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/sphinx-ws/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/unpause"
                }
              },
              "name": "sphinx-ws",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/instance/122"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-ws/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/sphinx-ws/122"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/sphinx-ws/121/with/122"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/sphinx-ws/122/build_cause"
                      }
                    },
                    "label": "122",
                    "schedule_at": "2016-03-18T05:53:27.187Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sphinx-ws/122/unit-test/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "unit-test",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sphinx-ws/122/package/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "package",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/sphinx-functional-test/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/unpause"
                }
              },
              "name": "sphinx-functional-test",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/instance/77"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sphinx-functional-test/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/sphinx-functional-test/77"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/sphinx-functional-test/76/with/77"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/sphinx-functional-test/77/build_cause"
                      }
                    },
                    "label": "77",
                    "schedule_at": "2016-03-18T06:26:57.190Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sphinx-functional-test/77/deploy/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sphinx-functional-test/77/smoke/2"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "smoke",
                          "status": "Failed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/deploy-sphinx/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/unpause"
                }
              },
              "name": "deploy-sphinx",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/instance/259"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sphinx/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/deploy-sphinx/259"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/deploy-sphinx/258/with/259"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/deploy-sphinx/259/build_cause"
                      }
                    },
                    "label": "259",
                    "schedule_at": "2016-03-18T07:23:21.019Z",
                    "triggered_by": "build-monitor",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/deploy-sphinx/259/deploy-qa/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy-qa",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/deploy-sphinx/259/deploy-uat/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy-uat",
                          "status": "Unknown"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "_links": {
          "self": {
            "href": "http://104.40.19.175:8153/go/api/config/pipeline_groups"
          },
          "doc": {
            "href": "http://api.go.cd/current/#pipeline-groups"
          }
        },
        "name": "shark",
        "_embedded": {
          "pipelines": [
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/shark-ui/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/unpause"
                }
              },
              "name": "shark-ui",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/instance/212"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ui/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/shark-ui/212"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/shark-ui/211/with/212"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/shark-ui/212/build_cause"
                      }
                    },
                    "label": "212",
                    "schedule_at": "2016-03-18T11:12:59.522Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/shark-ui/212/unit-test/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "unit-test",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/shark-ui/212/package/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "package",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/shark-ws/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/unpause"
                }
              },
              "name": "shark-ws",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/instance/63"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/shark-ws/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/shark-ws/63"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/shark-ws/62/with/63"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/shark-ws/63/build_cause"
                      }
                    },
                    "label": "63",
                    "schedule_at": "2016-03-15T07:19:43.377Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/shark-ws/63/unit-test/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "unit-test",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/shark-ws/63/package/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "package",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/shark-functional-test/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/unpause"
                }
              },
              "name": "shark-functional-test",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/instance/66"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/shark-functional-test/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/shark-functional-test/66"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/shark-functional-test/65/with/66"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/shark-functional-test/66/build_cause"
                      }
                    },
                    "label": "66",
                    "schedule_at": "2016-03-18T11:16:58.828Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/shark-functional-test/66/deploy/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/shark-functional-test/66/smoke/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "smoke",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/deploy-shark/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/unpause"
                }
              },
              "name": "deploy-shark",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/instance/231"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-shark/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/deploy-shark/231"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/deploy-shark/230/with/231"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/deploy-shark/231/build_cause"
                      }
                    },
                    "label": "231",
                    "schedule_at": "2016-03-17T11:10:27.267Z",
                    "triggered_by": "suresh",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/deploy-shark/231/deploy-qa/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy-qa",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/deploy-shark/231/deploy-uat/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy-uat",
                          "status": "Unknown"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "_links": {
          "self": {
            "href": "http://104.40.19.175:8153/go/api/config/pipeline_groups"
          },
          "doc": {
            "href": "http://api.go.cd/current/#pipeline-groups"
          }
        },
        "name": "sods",
        "_embedded": {
          "pipelines": [
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/sods-ws/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/unpause"
                }
              },
              "name": "sods-ws",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/instance/30"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/sods-ws/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/sods-ws/30"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/sods-ws/29/with/30"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/sods-ws/30/build_cause"
                      }
                    },
                    "label": "30",
                    "schedule_at": "2016-03-15T06:21:02.065Z",
                    "triggered_by": "subramk",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sods-ws/30/unit-test/2"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "unit-test",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/sods-ws/30/package/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "package",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/deploy-sods-ws/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/unpause"
                }
              },
              "name": "deploy-sods-ws",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/instance/54"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-sods-ws/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/deploy-sods-ws/54"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/deploy-sods-ws/53/with/54"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/deploy-sods-ws/54/build_cause"
                      }
                    },
                    "label": "54",
                    "schedule_at": "2016-03-15T06:23:12.822Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/deploy-sods-ws/54/deploy/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "_links": {
          "self": {
            "href": "http://104.40.19.175:8153/go/api/config/pipeline_groups"
          },
          "doc": {
            "href": "http://api.go.cd/current/#pipeline-groups"
          }
        },
        "name": "rods",
        "_embedded": {
          "pipelines": [
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/rods-ws/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/unpause"
                }
              },
              "name": "rods-ws",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/instance/29"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/rods-ws/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/rods-ws/29"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/rods-ws/28/with/29"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/rods-ws/29/build_cause"
                      }
                    },
                    "label": "29",
                    "schedule_at": "2016-03-18T12:10:29.861Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/rods-ws/29/unit-test/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "unit-test",
                          "status": "Passed"
                        },
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/rods-ws/29/package/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "package",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "_links": {
                "self": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/history"
                },
                "doc": {
                  "href": "http://api.go.cd/current/#pipelines"
                },
                "settings_path": {
                  "href": "http://104.40.19.175:8153/go/admin/pipelines/deploy-rods-ws/general"
                },
                "trigger": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/schedule"
                },
                "trigger_with_options": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/schedule"
                },
                "pause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/pause"
                },
                "unpause": {
                  "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/unpause"
                }
              },
              "name": "deploy-rods-ws",
              "locked": false,
              "pause_info": {
                "paused": false,
                "paused_by": null,
                "pause_reason": null
              },
              "_embedded": {
                "instances": [
                  {
                    "_links": {
                      "self": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/instance/54"
                      },
                      "doc": {
                        "href": "http://api.go.cd/current/#get-pipeline-instance"
                      },
                      "history_url": {
                        "href": "http://104.40.19.175:8153/go/api/pipelines/deploy-rods-ws/history"
                      },
                      "vsm_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/value_stream_map/deploy-rods-ws/54"
                      },
                      "compare_url": {
                        "href": "http://104.40.19.175:8153/go/compare/deploy-rods-ws/53/with/54"
                      },
                      "build_cause_url": {
                        "href": "http://104.40.19.175:8153/go/pipelines/deploy-rods-ws/54/build_cause"
                      }
                    },
                    "label": "54",
                    "schedule_at": "2016-03-18T12:12:59.062Z",
                    "triggered_by": "changes",
                    "_embedded": {
                      "stages": [
                        {
                          "_links": {
                            "self": {
                              "href": "http://104.40.19.175:8153/go/api/stages/deploy-rods-ws/54/deploy/1"
                            },
                            "doc": {
                              "href": "http://api.go.cd/current/#get-stage-instance"
                            }
                          },
                          "name": "deploy",
                          "status": "Passed"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

export default data;
