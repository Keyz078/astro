---
title: "Testing sintak code"
description: "Ini adalah deskripsi singkat tentang catatan pertamaku di situs ini."
date: 2025-06-10T15:35:00+07:00
tags: ["pengenalan", "kubernetes", "astro"]
cover: ""
---

# Test

ini test code

```bash
#!/bin/bash
echo "hello world"
```

ini kalo python
```python
print("hello world")
```

ini yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null # this
  labels:
    app: my-app
  name: my-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
  strategy: {} # this
  template:
    metadata:
      creationTimestamp: null # this
      labels:
        app: my-app
    spec:
      containers:
      - image: dummy
        name: my-container
        resources: {} # this
status: {} # this 
```
