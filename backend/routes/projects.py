from fastapi import APIRouter
from typing import List
from pydantic import BaseModel

router = APIRouter()

class Project(BaseModel):
    title: str
    description: str
    tech_stack: List[str]
    github_url: str

@router.get("/projects", response_model=List[Project])
async def get_projects():
    projects = [
        Project(
            title="AI Research System",
            description="Django REST API for AI-powered research.",
            tech_stack=["Django", "REST API", "AI"],
            github_url="https://github.com/aadityaraj2532/ai-research-system" 
        ),
        Project(
            title="CryptoViz",
            description="Comprehensive cryptocurrency visualization platform providing real-time visual insights for investors and traders.",
            tech_stack=["React", "Chart.js", "API"],
            github_url="https://github.com/aadityaraj2532/CryptoViz"
        ),
        Project(
            title="CodeFix",
            description="Enhanced code analysis system using Groq API to detect coding errors and suggest fixes.",
            tech_stack=["Django", "Groq API"],
            github_url="https://github.com/aadityaraj2532/CodeFix" 
        ),
        Project(
            title="Heart Disease Prediction",
            description="AI-powered web app using Flask and KNN ML model with 88.59% accuracy.",
            tech_stack=["Flask", "KNN", "ML"],
            github_url="https://github.com/aadityaraj2532/heart-disease-prediction"
        ),
        Project(
            title="Movie Recommendation System",
            description="Recommends movies based on user preferences using Machine Learning.",
            tech_stack=["Python", "ML", "Pandas"],
            github_url="https://github.com/aadityaraj2532/Movie-Recommendation-System"
        )
    ]
    return projects
