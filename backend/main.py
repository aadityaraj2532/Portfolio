from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Aditya Ras Portfolio API")

# Configure CORS
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "*" # Allow all for production to avoid CORS issues on Render if domain changes
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Aditya Ras Portfolio API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

from routes import contact, projects
app.include_router(contact.router, prefix="/api")
app.include_router(projects.router, prefix="/api")
