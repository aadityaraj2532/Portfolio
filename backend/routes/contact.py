import os
from dotenv import load_dotenv
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel, EmailStr
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType

load_dotenv()

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)

@router.post("/contact")
async def submit_contact_form(form: ContactForm):
    # Save to file backup
    with open("messages.txt", "a") as f:
        f.write(f"Name: {form.name}\nEmail: {form.email}\nMessage: {form.message}\n-------------------\n")

    # Send Email
    message = MessageSchema(
        subject=f"New Portfolio Message from {form.name}",
        recipients=[os.getenv("MAIL_USERNAME")], # Send to yourself
        body=f"""
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Message:</strong></p>
        <p>{form.message}</p>
        """,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    
    try:
        await fm.send_message(message)
        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        print(f"Error sending email: {e}")
        return {"status": "error", "message": f"Failed to send email: {str(e)}"}
