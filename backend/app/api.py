from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .ml_logic import calculate_urgency_score
from .models import RecipientInput, UrgencyScoreResponse

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Donation API"}

@app.post("/urgency-score", response_model=UrgencyScoreResponse)
def get_urgency_score(recipient: RecipientInput):
    score = calculate_urgency_score(recipient.dict())
    return {"urgency_score": score}
