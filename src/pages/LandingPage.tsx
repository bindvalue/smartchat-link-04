import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MessageSquare, Zap, Shield, Globe, Users, ArrowRight, Bot, BarChart3, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Automation",
      description: "Automatize conversas e respostas no WhatsApp com templates inteligentes"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Central de Atendimento",
      description: "Integração completa com Chatwoot para gerenciar todos os atendimentos"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fluxos N8N",
      description: "Execute automações complexas conectando múltiplas ferramentas"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Avançado",
      description: "Acompanhe métricas detalhadas de engajamento e conversões"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia e compliance LGPD"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-canais",
      description: "Conecte WhatsApp, Telegram, Facebook e outros canais"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "R$ 49",
      period: "/mês",
      description: "Perfeito para pequenos negócios",
      features: [
        "1 número WhatsApp",
        "500 mensagens/mês",
        "3 automações básicas",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R$ 149",
      period: "/mês",
      description: "Ideal para empresas em crescimento",
      features: [
        "3 números WhatsApp",
        "5.000 mensagens/mês",
        "Automações ilimitadas",
        "Integração Chatwoot",
        "Analytics avançado",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 399",
      period: "/mês",
      description: "Para empresas de grande porte",
      features: [
        "Números ilimitados",
        "Mensagens ilimitadas",
        "White label",
        "API personalizada",
        "Suporte dedicado",
        "Treinamento incluído"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-gradient-primary/10 border-primary/20">
              🚀 Automação Inteligente para WhatsApp
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Automatize seu{' '}
              <span className="text-gradient">WhatsApp</span>{' '}
              e{' '}
              <span className="text-gradient-accent">Atendimento</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conecte WhatsApp, Chatwoot, N8N e outras ferramentas em uma plataforma única. 
              Automatize processos, melhore o atendimento e escale seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/auth')}
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg"
                onClick={() => navigate('/demo')}
              >
                Ver Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-success mr-2" />
                Teste grátis 14 dias
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-success mr-2" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-success mr-2" />
                Suporte em português
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-32 right-10 w-16 h-16 bg-gradient-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos <span className="text-gradient">Poderosos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa para automatizar e escalar seu atendimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preços <span className="text-gradient">Transparentes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano perfeito para seu negócio. Sem surpresas, sem taxas ocultas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card border-border/50 hover-lift ${
                  plan.popular ? 'ring-2 ring-primary glow-primary' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    Mais Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90 text-white' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    onClick={() => navigate('/auth')}
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Automatizar?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram seu atendimento
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg"
              onClick={() => navigate('/auth')}
            >
              Começar Teste Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;