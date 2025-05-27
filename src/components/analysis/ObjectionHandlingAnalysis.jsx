import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Block,
  CheckCircle,
  Warning,
  TrendingUp,
  Psychology,
  MonetizationOn,
  Schedule,
  ExpandMore,
  ThumbUp,
  ThumbDown
} from '@mui/icons-material';

const ObjectionHandlingAnalysis = ({ conversationData }) => {
  const objectionData = {
    overall_performance: {
      score: 74,
      objections_encountered: 8,
      successfully_handled: 6,
      conversion_impact: "+23% case acceptance likelihood"
    },
    objection_categories: {
      price: {
        count: 3,
        success_rate: 67,
        common_objections: [
          "That's more expensive than I expected",
          "Insurance doesn't cover cosmetic procedures",
          "I need to think about the investment"
        ],
        handling_effectiveness: "Good",
        improvement_areas: ["Value demonstration", "Payment options presentation"]
      },
      timing: {
        count: 2,
        success_rate: 100,
        common_objections: [
          "I need to discuss this with my spouse",
          "I'm not ready to start treatment yet"
        ],
        handling_effectiveness: "Excellent",
        improvement_areas: []
      },
      fear_anxiety: {
        count: 2,
        success_rate: 50,
        common_objections: [
          "I'm worried about the pain",
          "What if the results don't look natural?"
        ],
        handling_effectiveness: "Needs Improvement",
        improvement_areas: ["Empathy building", "Social proof usage", "Before/after examples"]
      },
      competition: {
        count: 1,
        success_rate: 100,
        common_objections: [
          "I'm getting quotes from other dentists"
        ],
        handling_effectiveness: "Excellent",
        improvement_areas: []
      }
    },
    handling_techniques: {
      acknowledge_and_validate: {
        usage_frequency: 85,
        effectiveness: 92,
        examples: [
          "I completely understand your concern about the investment",
          "That's a great question about the treatment timeline"
        ]
      },
      feel_felt_found: {
        usage_frequency: 60,
        effectiveness: 78,
        examples: [
          "I know how you feel, many patients have felt the same way, and what they found was..."
        ]
      },
      question_technique: {
        usage_frequency: 70,
        effectiveness: 88,
        examples: [
          "What specifically concerns you about the timeline?",
          "Help me understand what would make this feel like the right investment for you?"
        ]
      },
      social_proof: {
        usage_frequency: 45,
        effectiveness: 95,
        examples: [
          "Just last week, a patient with similar concerns said...",
          "95% of our smile makeover patients tell us..."
        ]
      }
    },
    dental_specific_patterns: {
      aesthetic_concerns: [
        "Results looking unnatural",
        "Matching existing teeth",
        "Smile looking 'fake'"
      ],
      financial_objections: [
        "High treatment cost",
        "Insurance limitations",
        "Payment plan concerns"
      ],
      procedural_fears: [
        "Pain during treatment",
        "Recovery time",
        "Multiple appointments"
      ],
      timing_issues: [
        "Family consultation needed",
        "Work schedule conflicts",
        "Special event deadlines"
      ]
    },
    missed_opportunities: [
      {
        objection: "I need to think about it",
        missed_technique: "Didn't isolate the specific concern",
        recommendation: "Ask: 'What specifically would you like to think about?'"
      },
      {
        objection: "It's expensive",
        missed_technique: "Didn't demonstrate value per day cost",
        recommendation: "Break down cost over lifespan: '$X per day for 10+ years of confidence'"
      }
    ],
    success_stories: [
      {
        objection: "I'm worried about pain",
        technique_used: "Empathy + Social proof + Specific process explanation",
        outcome: "Patient scheduled immediately",
        impact: "Converted $12,000 case"
      },
      {
        objection: "Need to discuss with spouse",
        technique_used: "Acknowledged + Offered spouse consultation",
        outcome: "Spouse joined next appointment",
        impact: "Both became patients"
      }
    ]
  };

  const getSuccessColor = (rate) => {
    if (rate >= 80) return '#4CAF50';
    if (rate >= 60) return '#FF9800';
    return '#f44336';
  };

  const getEffectivenessLevel = (rate) => {
    if (rate >= 90) return 'Excellent';
    if (rate >= 75) return 'Good';
    if (rate >= 60) return 'Average';
    return 'Needs Improvement';
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ 
        background: 'linear-gradient(45deg, #f44336, #FF9800)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        mb: 3
      }}>
        Objection Handling Analysis
      </Typography>

      <Grid container spacing={3}>
        {/* Overall Performance */}
        <Grid item xs={12}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(255, 152, 0, 0.05))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(244, 67, 54, 0.2)'
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Block sx={{ fontSize: 40, color: '#f44336', mr: 2 }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Objection Handling Score: {objectionData.overall_performance.score}/100
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {objectionData.overall_performance.successfully_handled}/{objectionData.overall_performance.objections_encountered} objections successfully handled
                  </Typography>
                </Box>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={objectionData.overall_performance.score} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  backgroundColor: 'rgba(244, 67, 54, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #f44336, #FF9800)'
                  }
                }}
              />
              <Alert severity="success" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  <strong>Impact:</strong> {objectionData.overall_performance.conversion_impact}
                </Typography>
              </Alert>
            </CardContent>
          </Card>
        </Grid>

        {/* Objection Categories */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Objection Categories & Performance
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(objectionData.objection_categories).map(([category, data]) => (
              <Grid item xs={12} md={6} key={category}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {category === 'price' && <MonetizationOn sx={{ color: '#4CAF50', mr: 1 }} />}
                      {category === 'timing' && <Schedule sx={{ color: '#2196F3', mr: 1 }} />}
                      {category === 'fear_anxiety' && <Psychology sx={{ color: '#FF9800', mr: 1 }} />}
                      {category === 'competition' && <TrendingUp sx={{ color: '#9C27B0', mr: 1 }} />}
                      <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                        {category.replace('_', ' & ')}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Count: {data.count}
                      </Typography>
                      <Chip 
                        label={`${data.success_rate}% Success`}
                        size="small"
                        sx={{ 
                          backgroundColor: getSuccessColor(data.success_rate),
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>

                    <Accordion sx={{ mb: 2 }}>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle2">Common Objections</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {data.common_objections.map((objection, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 24 }}>
                                <Box sx={{ 
                                  width: 6, 
                                  height: 6, 
                                  borderRadius: '50%', 
                                  backgroundColor: '#666' 
                                }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={`"${objection}"`}
                                primaryTypographyProps={{ variant: 'body2', fontStyle: 'italic' }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    {data.improvement_areas.length > 0 && (
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                          Improvement Areas:
                        </Typography>
                        {data.improvement_areas.map((area, index) => (
                          <Chip 
                            key={index}
                            label={area}
                            size="small"
                            variant="outlined"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Handling Techniques */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Handling Techniques Performance
              </Typography>
              {Object.entries(objectionData.handling_techniques).map(([technique, data], index) => (
                <Box key={technique} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                      {technique.replace(/_/g, ' ')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip 
                        label={`${data.usage_frequency}% Usage`}
                        size="small"
                        variant="outlined"
                      />
                      <Chip 
                        label={`${data.effectiveness}% Effective`}
                        size="small"
                        sx={{ 
                          backgroundColor: getSuccessColor(data.effectiveness),
                          color: 'white'
                        }}
                      />
                    </Box>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Examples:
                    </Typography>
                    {data.examples.map((example, idx) => (
                      <Typography key={idx} variant="body2" sx={{ 
                        fontStyle: 'italic', 
                        color: 'text.secondary',
                        ml: 2,
                        mb: 0.5
                      }}>
                        ""{example}""
                      </Typography>
                    ))}
                  </Box>
                  
                  <LinearProgress 
                    variant="determinate" 
                    value={data.effectiveness} 
                    sx={{ 
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getSuccessColor(data.effectiveness)
                      }
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Success Stories */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Success Stories
              </Typography>
              {objectionData.success_stories.map((story, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ThumbUp sx={{ color: '#4CAF50', fontSize: 16, mr: 1 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Objection: "{story.objection}"
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Technique:</strong> {story.technique_used}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Outcome:</strong> {story.outcome}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                    <strong>Impact:</strong> {story.impact}
                  </Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Missed Opportunities */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Missed Opportunities & Recommendations
              </Typography>
              <Grid container spacing={2}>
                {objectionData.missed_opportunities.map((opportunity, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper sx={{ p: 2, backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Warning sx={{ color: '#FF9800', fontSize: 16, mr: 1 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                          "{opportunity.objection}"
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Missed:</strong> {opportunity.missed_technique}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#FF9800', fontWeight: 'bold' }}>
                        <strong>Recommendation:</strong> {opportunity.recommendation}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ObjectionHandlingAnalysis;