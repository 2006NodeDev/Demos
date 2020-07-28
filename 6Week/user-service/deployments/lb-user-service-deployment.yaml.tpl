apiVersion: apps/v1
kind: Deployment
metadata:
  name: lb-user-service-deployment
  labels: 
    app: lb
    service: user-service
    deployment: uat
spec:
  replicas: 2
  selector:
    matchLabels:
      app: lb
      service: user-service
  template:
    metadata:
      labels:
        app: lb
        service: user-service
    spec:
      containers:
      - name: lb-user-service
        image: gcr.io/tenacious-text-279818/lb-user-service:COMMIT_SHA
        imagePullPolicy: Always
        env:
        - name: LB_HOST
          value: "10.58.96.3"
        - name: LB_DATABASE
          value: "lb-micro"
        - name: LB_USER
          value: "postgres"
        - name: LB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: lb-user-service-secrets
              key: password
        ports:
        - containerPort: 2006
        livenessProbe:
          httpGet:
            path: /health
            port: 2006
          initialDelaySeconds: 3
          periodSeconds: 3
        readinessProbe:
          httpGet:
            path: /health
            port: 2006
          initialDelaySeconds: 3
          periodSeconds: 3
