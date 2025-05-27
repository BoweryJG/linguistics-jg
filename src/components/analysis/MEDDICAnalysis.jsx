import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Alert,
  useTheme,
  alpha,
  Card,
  CardContent,
  Divider,
  Stack
} from '@mui/material';
import {
  CheckCircle,
  Warning,
  Error,
  TrendingUp,
  Person,
  AttachMoney,
  Gavel,
  Timeline,
  Psychology,
  Groups,
  EmojiEvents
} from '@mui/icons-material';

const MEDDICAnalysis = ({ data }) => {
  const theme = useTheme();
  
  // Sample MEDDIC data structure
  const meddic = data || {
    overall_score: 78,
    components: {
      metrics: {
        score: 85,
        status: 'strong',
        findings: [
          'Clear ROI metrics identified: 3.2x return in 18 months',
          'Productivity gains quantified: 15 hours/week saved',
          'Cost reduction potential: $250K annually'
        ],
        risks: ['ROI timeline assumptions need validation'],
        recommendations: ['Create custom ROI calculator with their data']
      },
      economic_buyer: {
        score: 70,
        status: 'moderate',
        findings: [
          'CFO mentioned as final approver',
          'Budget owner identified as VP Operations',
          'Decision making unit includes 5 stakeholders'
        ],
        risks: ['No direct engagement with CFO yet'],
        recommendations: ['Schedule executive briefing with CFO within 7 days']
      },
      decision_criteria: {
        score: 90,
        status: 'strong',
        findings: [
          'Clear criteria defined: Integration, scalability, support',
          'Technical requirements documented',
          'Success metrics agreed upon'
        ],
        risks: ['Security review process not discussed'],
        recommendations: ['Provide security documentation proactively']
      },
      decision_process: {
        score: 75,
        status: 'moderate',
        findings: [
          'Timeline established: Decision by Q2',
          '3-step evaluation process defined',
          'Stakeholder roles clarified'
        ],
        risks: ['Procurement process details unclear'],
        recommendations: ['Map complete approval workflow']
      },
      identify_pain: {
        score: 80,
        status: 'strong',
        findings: [
          'Manual processes causing 40% efficiency loss',
          'Compliance risks identified and quantified',
          'Growth limitations due to current system'
        ],
        risks: ['Pain not yet validated with all stakeholders'],
        recommendations: ['Conduct workshop with end users']
      },
      champion: {
        score: 65,
        status: 'weak',
        findings: [
          'VP Sales showing strong support',
          'Has influence but not decision authority',
          'Willing to advocate internally'
        ],
        risks: ['Champion lacks political capital', 'No technical champion identified'],
        recommendations: ['Develop multi-champion strategy', 'Enable champion with success stories']
      },
      competition: {
        score: 80,
        status: 'strong',
        findings: [
          'Main competitor: CompetitorX',
          'Differentiation on integration capabilities',
          'Price competitive advantage identified'
        ],
        risks: ['Competitor has existing relationship'],
        recommendations: ['Create competitor displacement strategy']
      }
    }
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'strong': return 'success';
      case 'moderate': return 'warning';
      case 'weak': return 'error';
      default: return 'default';
    }
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'strong': return <CheckCircle />;
      case 'moderate': return <Warning />;
      case 'weak': return <Error />;
      default: return <Warning />;
    }
  };
  
  const componentIcons = {
    metrics: <AttachMoney />,
    economic_buyer: <Person />,
    decision_criteria: <Gavel />,
    decision_process: <Timeline />,
    identify_pain: <Psychology />,
    champion: <EmojiEvents />,
    competition: <Groups />
  };
  
  const componentTitles = {
    metrics: 'Metrics',
    economic_buyer: 'Economic Buyer',
    decision_criteria: 'Decision Criteria',
    decision_process: 'Decision Process',
    identify_pain: 'Identify Pain',
    champion: 'Champion',
    competition: 'Competition'
  };
  
  return (
    <Box>
      {/* Overall Score */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.02) 100%)',
          border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
          borderRadius: 3
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                MEDDIC Score
              </Typography>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 900,
                  fontSize: '4rem',
                  color: meddic.overall_score >= 80 ? 'success.main' : 
                         meddic.overall_score >= 60 ? 'warning.main' : 'error.main'
                }}
              >
                {meddic.overall_score}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Deal Qualification Strength
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Executive Summary
            </Typography>
            <Typography variant="body1" paragraph>
              This opportunity shows strong potential with clear metrics and pain points identified. 
              The main gaps are in champion development and economic buyer engagement.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Chip
                icon={<TrendingUp />}
                label="High Revenue Potential"
                color="success"
              />
              <Chip
                icon={<Warning />}
                label="Executive Access Needed"
                color="warning"
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Component Analysis */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        MEDDIC Component Analysis
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(meddic.components).map(([key, component]) => (
          <Grid item xs={12} md={6} key={key}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <CardContent>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: alpha(theme.palette[getStatusColor(component.status)].main, 0.1),
                      color: theme.palette[getStatusColor(component.status)].main,
                      mr: 2
                    }}
                  >
                    {componentIcons[key]}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {componentTitles[key]}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={component.score}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          flex: 1,
                          bgcolor: alpha(theme.palette[getStatusColor(component.status)].main, 0.1),
                          '& .MuiLinearProgress-bar': {
                            bgcolor: theme.palette[getStatusColor(component.status)].main,
                          }
                        }}
                      />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {component.score}%
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    icon={getStatusIcon(component.status)}
                    label={component.status.toUpperCase()}
                    size="small"
                    color={getStatusColor(component.status)}
                  />
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                {/* Findings */}
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                  Key Findings
                </Typography>
                <List dense sx={{ mb: 2 }}>
                  {component.findings.map((finding, idx) => (
                    <ListItem key={idx} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle sx={{ fontSize: 16, color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={finding}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
                
                {/* Risks */}
                {component.risks.length > 0 && (
                  <>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, color: 'error.main' }}>
                      Risks
                    </Typography>
                    <List dense sx={{ mb: 2 }}>
                      {component.risks.map((risk, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Warning sx={{ fontSize: 16, color: 'error.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={risk}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
                
                {/* Recommendations */}
                <Alert 
                  severity="info" 
                  variant="outlined"
                  sx={{ 
                    '& .MuiAlert-message': { width: '100%' },
                    borderColor: theme.palette[getStatusColor(component.status)].main,
                    color: theme.palette[getStatusColor(component.status)].main
                  }}
                >
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                    Recommended Actions
                  </Typography>
                  {component.recommendations.map((rec, idx) => (
                    <Typography key={idx} variant="body2" sx={{ mt: 0.5 }}>
                      • {rec}
                    </Typography>
                  ))}
                </Alert>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Next Steps */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mt: 4,
          background: theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary.main, 0.05)
            : alpha(theme.palette.primary.main, 0.02),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: 2
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
          Priority Action Plan
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Alert severity="error" variant="outlined">
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Immediate (This Week)
              </Typography>
              <Typography variant="body2">
                • Schedule CFO meeting<br />
                • Strengthen champion position<br />
                • Address security concerns
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12} md={4}>
            <Alert severity="warning" variant="outlined">
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Short-term (Next 2 Weeks)
              </Typography>
              <Typography variant="body2">
                • Complete ROI validation<br />
                • Map decision process<br />
                • Competitive positioning
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12} md={4}>
            <Alert severity="success" variant="outlined">
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Strategic (This Month)
              </Typography>
              <Typography variant="body2">
                • Build multi-champion strategy<br />
                • Executive alignment<br />
                • Finalize proposal
              </Typography>
            </Alert>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MEDDICAnalysis;