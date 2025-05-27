import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Alert,
  LinearProgress
} from '@mui/material';
import {
  Gavel,
  Psychology,
  TrendingUp,
  Star,
  CheckCircle,
  Warning,
  MonetizationOn,
  Schedule,
  Lightbulb,
  EmojiEvents
} from '@mui/icons-material';

const NegotiationMasterAnalysis = ({ conversationData }) => {
  const negotiationData = {
    harvey_specter_assessment: {
      overall_score: 76,
      negotiation_style: "Collaborative Power Player",
      confidence_level: "High - Controlled Authority",
      summary: "Strong foundation with room for Harvey-level refinement in positioning and leverage"
    },
    power_dynamics: {
      position_strength: {
        score: 82,
        factors: [
          "Expertise clearly established",
          "Technology advantage demonstrated",
          "Patient need well-identified",
          "Urgency appropriately created"
        ]
      },
      leverage_creation: {
        score: 68,
        opportunities: [
          "Limited appointment availability",
          "Exclusive 3D planning process",
          "Seasonal booking advantages",
          "Payment plan time sensitivity"
        ],
        missed_leverage: [
          "Competitor booking timelines",
          "Treatment complexity advantages",
          "Referral exclusivity benefits"
        ]
      }
    },
    harvey_techniques_applied: {
      used_effectively: [
        {
          technique: "Information Control",
          example: "Strategically revealed treatment options based on patient readiness",
          harvey_rating: 8.5,
          impact: "High - Maintained professional authority"
        },
        {
          technique: "Value Anchoring",
          example: "Positioned premium outcome expectations before price discussion",
          harvey_rating: 7.8,
          impact: "Good - Set quality expectations first"
        },
        {
          technique: "Strategic Empathy",
          example: "Acknowledged aesthetic concerns while building confidence",
          harvey_rating: 8.2,
          impact: "High - Built trust and rapport"
        }
      ],
      improvement_opportunities: [
        {
          technique: "Controlled Scarcity",
          gap: "Could emphasize limited calendar availability more strategically",
          harvey_approach: "Create time pressure without desperation",
          potential_impact: "Accelerated decision timeline"
        },
        {
          technique: "Preemptive Objection Handling",
          gap: "Waited for objections rather than addressing proactively",
          harvey_approach: "Address concerns before they're raised",
          potential_impact: "Smoother consultation flow"
        }
      ]
    },
    closing_power: {
      techniques_used: [
        "Assumptive language patterns",
        "Next step naturalization",
        "Benefit summarization",
        "Social proof integration"
      ],
      harvey_enhancements: [
        "Add strategic silence after key questions",
        "Use 'when' instead of 'if' language consistently",
        "Create multiple smaller commitments leading to main decision",
        "Position alternatives as different paths to same outcome"
      ],
      effectiveness_score: 74
    },
    persuasion_mastery: {
      emotional_intelligence: {
        score: 85,
        strengths: [
          "Excellent reading of patient anxiety levels",
          "Appropriate empathy without over-accommodation",
          "Professional confidence without arrogance"
        ]
      },
      logical_frameworks: {
        score: 79,
        application: [
          "Cost-benefit analysis presentation",
          "Timeline logic for treatment phases",
          "Risk-reward positioning for aesthetic investment"
        ]
      },
      influence_tactics: {
        score: 72,
        harvey_favorites: [
          {
            tactic: "Social Proof",
            usage: "Good - Referenced similar successful cases",
            harvey_level: "Could be more specific and dramatic"
          },
          {
            tactic: "Authority Positioning",
            usage: "Strong - Credentials and experience highlighted",
            harvey_level: "Excellent foundation, maintain consistency"
          },
          {
            tactic: "Reciprocity",
            usage: "Moderate - Provided valuable insights",
            harvey_level: "Opportunity for more strategic gifts of value"
          }
        ]
      }
    },
    dental_power_moves: {
      executed: [
        {
          move: "Technology Demonstration Dominance",
          description: "Used 3D imaging to create 'wow' moment and establish tech superiority",
          harvey_rating: 9.0,
          outcome: "Patient engagement peaked, competitive advantage clear"
        },
        {
          move: "Expertise Storytelling",
          description: "Shared relevant case success stories to build confidence",
          harvey_rating: 7.5,
          outcome: "Trust building and outcome visualization"
        }
      ],
      missed_opportunities: [
        {
          move: "Scarcity Creation",
          description: "Could have emphasized exclusive treatment windows",
          harvey_potential: "Limited spots for optimal timeline completion"
        },
        {
          move: "Competitive Neutralization",
          description: "Defensive rather than proactive competitive positioning",
          harvey_potential: "Preemptively address why others fall short"
        }
      ]
    },
    negotiation_psychology: {
      patient_profile: "Analytical Decision Maker with High Standards",
      harvey_read: "Responds to expertise and exclusivity, fears mediocrity",
      optimal_approach: [
        "Position as premium choice for discerning patients",
        "Emphasize limited availability and selective patient acceptance",
        "Use sophisticated language and concepts",
        "Provide detailed technical explanations with confident delivery"
      ],
      psychological_triggers: [
        "Fear of suboptimal results",
        "Desire for cutting-edge treatment",
        "Need for professional validation",
        "Status and quality association"
      ]
    },
    harvey_scoring: {
      categories: {
        presence_authority: 82,
        strategic_thinking: 74,
        closing_power: 76,
        value_positioning: 80,
        leverage_creation: 68,
        psychological_insight: 85
      },
      overall_harvey_rating: 77,
      advancement_areas: [
        "More aggressive scarcity creation",
        "Preemptive competitive neutralization",
        "Strategic silence utilization",
        "Multiple commitment pathway design"
      ]
    },
    recommended_upgrades: {
      immediate_implementation: [
        {
          upgrade: "Harvey's Calendar Control",
          script: "'I have two optimal treatment windows in the next 8 weeks - let me check which aligns with your timeline.'",
          impact: "Creates natural urgency without pressure"
        },
        {
          upgrade: "Preemptive Excellence Positioning",
          script: "'Unlike traditional approaches that compromise on precision, our 3D methodology ensures...'",
          impact: "Neutralizes competition before it's mentioned"
        },
        {
          upgrade: "Strategic Consultation Ending",
          script: "'Based on everything we've discussed, I'm confident this is the right path. The question isn't whether to proceed, but which timeline works best for you.'",
          impact: "Assumptive close with choice illusion"
        }
      ],
      advanced_techniques: [
        "Develop signature treatment methodology branding",
        "Create exclusive patient selection criteria narrative",
        "Build strategic partnership leverage stories",
        "Design premium patient experience differentiation"
      ]
    },
    success_indicators: {
      harvey_benchmarks: [
        "Patient feels privileged to be accepted for treatment",
        "Competition is viewed as clearly inferior",
        "Price becomes secondary to quality and exclusivity",
        "Timeline urgency is naturally accepted",
        "Referral enthusiasm is immediate"
      ],
      current_achievement: "70% of Harvey benchmarks met",
      next_level_focus: "Scarcity mastery and competitive dominance"
    }
  };

  const getHarveyColor = (score) => {
    if (score >= 85) return '#FFD700'; // Gold
    if (score >= 75) return '#4CAF50'; // Green
    if (score >= 65) return '#2196F3'; // Blue
    if (score >= 55) return '#FF9800'; // Orange
    return '#f44336'; // Red
  };

  const HarveyMeter = ({ label, score }) => (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: getHarveyColor(score) }}>
          {score}/100
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={score}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(0,0,0,0.1)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: getHarveyColor(score),
            borderRadius: 4
          }
        }}
      />
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ 
        background: 'linear-gradient(45deg, #FFD700, #FFA000)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        mb: 3
      }}>
        Negotiation Master Analysis
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic' }}>
        "The best negotiation is when both parties feel they've won, but you've actually won more." - Harvey Specter
      </Typography>

      <Grid container spacing={3}>
        {/* Harvey Specter Assessment */}
        <Grid item xs={12}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 160, 0, 0.05))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 215, 0, 0.3)'
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ 
                  width: 60, 
                  height: 60, 
                  backgroundColor: '#FFD700',
                  color: '#000',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  mr: 2
                }}>
                  HS
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Harvey Specter Analysis: {negotiationData.harvey_specter_assessment.overall_score}/100
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {negotiationData.harvey_specter_assessment.negotiation_style} • {negotiationData.harvey_specter_assessment.confidence_level}
                  </Typography>
                </Box>
                <Chip 
                  label="Negotiation Master"
                  sx={{ 
                    backgroundColor: '#FFD700',
                    color: '#000',
                    fontWeight: 'bold'
                  }}
                />
              </Box>
              <Alert severity="info" sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
                <Typography variant="body2">
                  <strong>Harvey's Take:</strong> {negotiationData.harvey_specter_assessment.summary}
                </Typography>
              </Alert>
            </CardContent>
          </Card>
        </Grid>

        {/* Harvey Scoring Breakdown */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEvents sx={{ color: '#FFD700', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Harvey Specter Scorecard
                </Typography>
              </Box>
              
              {Object.entries(negotiationData.harvey_scoring.categories).map(([category, score]) => (
                <HarveyMeter 
                  key={category}
                  label={category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  score={score}
                />
              ))}

              <Box sx={{ textAlign: 'center', mt: 2, p: 2, backgroundColor: 'rgba(255, 215, 0, 0.1)', borderRadius: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
                  {negotiationData.harvey_scoring.overall_harvey_rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Overall Harvey Rating
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Power Dynamics */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Power Dynamics Assessment
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Gavel sx={{ color: '#4CAF50', mr: 1 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Position Strength: {negotiationData.power_dynamics.position_strength.score}/100
                  </Typography>
                </Box>
                <List dense>
                  {negotiationData.power_dynamics.position_strength.factors.map((factor, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <CheckCircle sx={{ fontSize: 14, color: '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={factor}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <TrendingUp sx={{ color: '#FF9800', mr: 1 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Leverage Creation: {negotiationData.power_dynamics.leverage_creation.score}/100
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Opportunities:</strong>
                </Typography>
                <List dense>
                  {negotiationData.power_dynamics.leverage_creation.opportunities.slice(0, 3).map((opportunity, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <Lightbulb sx={{ fontSize: 14, color: '#FF9800' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={opportunity}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Harvey Techniques Applied */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Harvey Specter Techniques Analysis
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#4CAF50' }}>
                    Successfully Applied Techniques
                  </Typography>
                  {negotiationData.harvey_techniques_applied.used_effectively.map((technique, index) => (
                    <Paper key={index} sx={{ p: 2, mb: 2, backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                          {technique.technique}
                        </Typography>
                        <Chip 
                          label={`${technique.harvey_rating}/10`}
                          size="small"
                          sx={{ backgroundColor: '#4CAF50', color: 'white' }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                        "{technique.example}"
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                        Impact: {technique.impact}
                      </Typography>
                    </Paper>
                  ))}
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#FF9800' }}>
                    Improvement Opportunities
                  </Typography>
                  {negotiationData.harvey_techniques_applied.improvement_opportunities.map((opportunity, index) => (
                    <Paper key={index} sx={{ p: 2, mb: 2, backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {opportunity.technique}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Gap:</strong> {opportunity.gap}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Harvey's Approach:</strong> {opportunity.harvey_approach}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#FF9800', fontWeight: 'bold' }}>
                        <strong>Potential Impact:</strong> {opportunity.potential_impact}
                      </Typography>
                    </Paper>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Dental Power Moves */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Dental Power Moves Assessment
              </Typography>
              
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#4CAF50' }}>
                Executed Power Moves
              </Typography>
              {negotiationData.dental_power_moves.executed.map((move, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {move.move}
                    </Typography>
                    <Chip 
                      label={`Harvey: ${move.harvey_rating}/10`}
                      size="small"
                      sx={{ backgroundColor: '#FFD700', color: '#000' }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {move.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                    <strong>Outcome:</strong> {move.outcome}
                  </Typography>
                </Paper>
              ))}

              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#FF9800', mt: 3 }}>
                Missed Power Move Opportunities
              </Typography>
              {negotiationData.dental_power_moves.missed_opportunities.map((missed, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {missed.move}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {missed.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
                    <strong>Harvey's Potential:</strong> {missed.harvey_potential}
                  </Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Psychology Profile */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Negotiation Psychology
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Patient Profile:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {negotiationData.negotiation_psychology.patient_profile}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Harvey's Read:
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFD700', fontStyle: 'italic' }}>
                  "{negotiationData.negotiation_psychology.harvey_read}"
                </Typography>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Psychological Triggers:
              </Typography>
              <List dense>
                {negotiationData.negotiation_psychology.psychological_triggers.map((trigger, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
                    <ListItemIcon sx={{ minWidth: 20 }}>
                      <Psychology sx={{ fontSize: 14, color: '#9C27B0' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={trigger}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Recommended Upgrades */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Harvey Specter Recommended Upgrades
              </Typography>
              
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Immediate Implementation (Ready to Use):
              </Typography>
              <Grid container spacing={2}>
                {negotiationData.recommended_upgrades.immediate_implementation.map((upgrade, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper sx={{ p: 2, height: '100%', backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {upgrade.upgrade}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontStyle: 'italic', 
                        mb: 1,
                        padding: 1,
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: 1
                      }}>
                        "{upgrade.script}"
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#FF9800', fontWeight: 'bold' }}>
                        Impact: {upgrade.impact}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, mt: 3 }}>
                Advanced Technique Development:
              </Typography>
              <List>
                {negotiationData.recommended_upgrades.advanced_techniques.map((technique, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Star sx={{ color: '#FFD700' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={technique}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Success Indicators */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Harvey Specter Success Benchmarks
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Current Achievement: {negotiationData.success_indicators.current_achievement}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={70} 
                  sx={{ 
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#FFD700'
                    }
                  }}
                />
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Harvey's Success Benchmarks:
              </Typography>
              <Grid container spacing={2}>
                {negotiationData.success_indicators.harvey_benchmarks.map((benchmark, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                      <CheckCircle sx={{ 
                        color: index < 3 ? '#4CAF50' : '#9E9E9E', 
                        mr: 2 
                      }} />
                      <Typography variant="body2" sx={{
                        color: index < 3 ? 'inherit' : 'text.secondary'
                      }}>
                        {benchmark}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  <strong>Next Level Focus:</strong> {negotiationData.success_indicators.next_level_focus}
                </Typography>
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NegotiationMasterAnalysis;