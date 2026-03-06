# BIOPREDICT API Documentation

Base URL: `http://localhost:8000/api/v1`

## Authentication

### Signup
`POST /users/signup`
- Body: `name`, `email`, `password`, `passwordConfirm`, `role` (optional)

### Login
`POST /users/login`
- Body: `email`, `password`

## Patients

### Get All Patients
`GET /patients` (Protected)

### Get Patient
`GET /patients/:id` (Protected)

### Create Patient
`POST /patients` (Protected)
- Body: `name`, `age`, `gender`, `medicalHistory` (array), `medications` (array)

### Update Patient
`PATCH /patients/:id` (Protected)

### Delete Patient
`DELETE /patients/:id` (Protected, Admin only)

## AI Analysis

### Create Analysis
`POST /analyses` (Protected)
- Body (Multipart/form-data):
  - `patientId`: ID of the patient
  - `medicalImage`: File upload
  - `aiPrediction`: String
  - `tumorLocation`: JSON stringified `{x, y}`
  - `classification`: 'benign' or 'malignant'
  - `confidenceScore`: Number

### Get All Analyses
`GET /analyses` (Protected)

### Get Analysis
`GET /analyses/:id` (Protected)

## Reports

### Create Report
`POST /reports` (Protected)
- Body: `analysisId`, `patientId`, `doctorNotes`, `summary`, `riskLevel`, `recommendations` (array)

### Get All Reports
`GET /reports` (Protected)

### Get Report
`GET /reports/:id` (Protected)

## Medications

### Search Medications
`GET /medications` (Protected)
- Query Params: `name`, `category`, `treatmentPurpose`

### Create Medication
`POST /medications` (Protected, Admin only)
- Body: `name`, `category`, `treatmentPurpose`, `description`

## Dashboard

### Get Statistics
`GET /dashboard/stats` (Protected)
- Returns: `patientCount`, `analysisCount`, `recentReports`

## History

### Get User History
`GET /history` (Protected)
- Returns user's action history
