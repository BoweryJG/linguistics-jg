# Linguistics-JG: AI-Powered Dental Sales Intelligence Platform 🦷

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100.0-009688?style=for-the-badge&logo=fastapi)
![Supabase](https://img.shields.io/badge/Supabase-2.39.7-3ECF8E?style=for-the-badge&logo=supabase)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai)
![Stripe](https://img.shields.io/badge/Stripe-14.0.0-635BFF?style=for-the-badge&logo=stripe)
![Material-UI](https://img.shields.io/badge/MUI-5.15.14-007FFF?style=for-the-badge&logo=mui)

## 🌟 Overview

Linguistics-JG is an enterprise-grade SaaS platform that revolutionizes dental and medical sales through AI-powered conversation intelligence. By analyzing sales calls and meetings, our platform provides actionable insights that help sales teams close more deals, faster.

### 🏆 Key Features

- **🎙️ Audio Transcription & Analysis**: Automatic transcription of sales calls using OpenAI Whisper with intelligent conversation analysis
- **🤖 10 AI-Powered Analysis Components**: Comprehensive sales intelligence covering every aspect of the sales process
- **📊 Real-Time Sales Intelligence**: Instant insights and recommendations based on conversation analysis
- **🦷 Dental Industry Specialization**: Pre-trained on thousands of dental sales conversations and industry-specific data
- **📱 Multi-Channel Support**: Integration with Twilio for SMS/voice capabilities
- **💳 Flexible Subscription Tiers**: From free trials to enterprise-grade solutions
- **🔒 Enterprise Security**: SOC 2 compliant with end-to-end encryption

## 🧠 AI Analysis Components

### 1. **MEDDIC Qualification** 🎯
- Automated MEDDIC scoring for every conversation
- Real-time identification of missing qualification criteria
- Deal health monitoring and forecasting

### 2. **Emotional Intelligence** ❤️
- Sentiment journey mapping throughout conversations
- Emotional trigger identification
- Rapport and trust scoring

### 3. **Personality Insights (DISC)** 👤
- Automatic DISC profile detection
- Communication style recommendations
- Personalized engagement strategies

### 4. **SPIN Selling Analysis** 🌀
- Question type categorization and effectiveness scoring
- Problem uncovering and implication development tracking
- Need-payoff articulation measurement

### 5. **Competitive Intelligence** 🏅
- Automatic competitor mention detection
- Win/loss analysis against specific competitors
- Differentiation effectiveness scoring

### 6. **Risk Assessment** ⚠️
- Real-time deal risk identification
- Red flag detection and alerting
- Risk mitigation recommendations

### 7. **Talk Analytics** 📊
- Talk-to-listen ratio optimization
- Monologue detection and interruption analysis
- Engagement scoring and silence analysis

### 8. **Next Best Action** 🎬
- AI-powered recommendations for immediate actions
- Personalized follow-up strategies
- Opportunity maximization insights

### 9. **Negotiation Master** 💼
- Harvey Specter-style power dynamics analysis
- Leverage point identification
- Strategic closing recommendations

### 10. **Objection Handling** 🛡️
- Common objection pattern recognition
- Response effectiveness scoring
- Objection preparation recommendations

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.2.0 with Vite
- **UI Library**: Material-UI (MUI) 5.15.14
- **Styling**: Emotion (CSS-in-JS)
- **Animation**: Framer Motion 11.0.0
- **State Management**: React Context API
- **HTTP Client**: Axios 1.6.7

### Backend
- **Framework**: FastAPI (Python)
- **AI/ML**: OpenAI GPT-4 & Whisper API
- **Database**: Supabase (PostgreSQL)
- **File Storage**: Supabase Storage
- **Authentication**: Supabase Auth with JWT
- **Payments**: Stripe Subscriptions
- **Communications**: Twilio API

### Infrastructure
- **Frontend Hosting**: Netlify
- **Backend Hosting**: Render
- **CDN**: Netlify Edge
- **Monitoring**: Built-in analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.0 or higher
- npm or yarn package manager
- Python 3.9 or higher (for backend development)
- Git for version control

## 🚀 Installation

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/linguistics-jg.git
   cd linguistics-jg
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://your-backend-url.onrender.com
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-service-key
   OPENAI_API_KEY=your-openai-api-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   TWILIO_ACCOUNT_SID=your-twilio-account-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   ```

5. **Run the backend server**
   ```bash
   uvicorn main:app --reload
   ```

## 🗄️ Database Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Run the database schema**
   Execute the following SQL files in your Supabase SQL editor:
   ```sql
   -- Run supabase_schema.sql
   -- Run supabase_subscription_schema.sql
   ```

3. **Enable Row Level Security (RLS)**
   Ensure RLS is enabled for all tables with appropriate policies

4. **Set up Storage buckets**
   Create an `audio-recordings` bucket for file uploads

## 🌐 Deployment

### Frontend Deployment (Netlify)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Configure environment variables** in Netlify dashboard

### Backend Deployment (Render)

1. **Create a new Web Service** on [Render](https://render.com)

2. **Connect your GitHub repository**

3. **Configure build settings**:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

4. **Add environment variables** in Render dashboard

## 📡 API Documentation

### Authentication
All API requests require an Authorization header:
```http
Authorization: Bearer <user-jwt-token>
```

### Endpoints

#### Upload Audio File
```http
POST /api/upload-audio
Content-Type: multipart/form-data

{
  "file": <audio-file>,
  "metadata": {
    "title": "string",
    "meeting_type": "discovery|demo|followup|closing",
    "approach": "socratic|consultative|spin"
  }
}
```

#### Get Analysis Results
```http
GET /api/conversations/{conversation_id}/analysis
```

#### Get User Usage
```http
GET /api/user/usage
```

### Webhook Integration
```http
POST /api/webhooks/transcription-complete
{
  "conversation_id": "uuid",
  "transcription_url": "string",
  "status": "completed|failed"
}
```

## 💰 Subscription Tiers

| Feature | Free | Basic ($49/mo) | Pro ($199/mo) | Enterprise |
|---------|------|----------------|---------------|------------|
| Conversations/month | 10 | 50 | 250 | Unlimited |
| Max file size | 25MB | 100MB | 500MB | Unlimited |
| AI Analysis Components | All | All | All | All + Custom |
| Team Members | 1 | 5 | Unlimited | Unlimited |
| API Access | ❌ | ✅ | ✅ | ✅ |
| Priority Support | ❌ | Email | Email + Chat | Dedicated |
| Custom Integrations | ❌ | ❌ | ❌ | ✅ |

## 🧪 Testing

### Frontend Tests
```bash
npm run test
npm run test:coverage
```

### Backend Tests
```bash
pytest
pytest --cov=app tests/
```

### Integration Tests
```bash
node test-backend-connection.js
node test-transcription-upload.js
node run-transcription-tests.js
```

## 📖 Usage Examples

### Basic Upload and Analysis
```javascript
import { uploadAudioFile, getAnalysis } from './src/api';

// Upload audio file
const conversation = await uploadAudioFile(file, {
  title: "Discovery Call - Acme Dental",
  meeting_type: "discovery",
  approach: "consultative"
});

// Get AI analysis
const analysis = await getAnalysis(conversation.id);
console.log(analysis.meddic_score);
console.log(analysis.next_best_actions);
```

### Webhook Integration
```python
from fastapi import FastAPI, Request

@app.post("/webhook/call-complete")
async def handle_call_complete(request: Request):
    data = await request.json()
    # Process completed call
    return {"status": "processed"}
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style
- Frontend: ESLint with Airbnb configuration
- Backend: Black formatter with PEP 8 compliance

### Commit Messages
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.linguistics-jg.com](https://docs.linguistics-jg.com)
- **Email**: support@linguistics-jg.com
- **Community**: [Discord Server](https://discord.gg/linguistics-jg)
- **Enterprise Support**: enterprise@linguistics-jg.com

## 🚀 Roadmap

### Q1 2025
- [ ] Mobile app (iOS/Android)
- [ ] Salesforce native integration
- [ ] Real-time conversation coaching

### Q2 2025
- [ ] Video call analysis
- [ ] Multi-language support (Spanish, French, German)
- [ ] Advanced team analytics dashboard

### Q3 2025
- [ ] AI-powered role-play training
- [ ] Predictive deal scoring
- [ ] Custom AI model training

## 🏅 Acknowledgments

- OpenAI for GPT-4 and Whisper APIs
- Supabase team for the excellent backend infrastructure
- Material-UI for the beautiful component library
- Our beta customers in the dental industry for invaluable feedback

---

Built with ❤️ by the Linguistics-JG Team | [Website](https://linguistics-jg.com) | [Blog](https://blog.linguistics-jg.com)