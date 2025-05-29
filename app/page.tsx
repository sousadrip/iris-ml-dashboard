"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Brain, Flower, BarChart3, TreePine, Github } from "lucide-react"
import { IrisVisualization } from "@/components/iris-visualization"
import { ModelMetrics } from "@/components/model-metrics"
import { PredictionForm } from "@/components/prediction-form"
import { DatasetInfo } from "@/components/dataset-info"

export default function IrisDashboard() {
  const [prediction, setPrediction] = useState<{
    species: string
    confidence: number
    features: number[]
  } | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Flower className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Iris ML Classifier</h1>
                <p className="text-sm text-gray-600">Classificação de Flores usando Árvore de Decisão</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4" />
            Machine Learning Project
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Classificação Inteligente de Flores Iris</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um modelo de árvore de decisão treinado para classificar espécies de flores Iris baseado em características
            morfológicas. Projeto completo de ML com visualizações interativas.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="prediction" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4 mx-auto">
            <TabsTrigger value="prediction" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Predição
            </TabsTrigger>
            <TabsTrigger value="visualization" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Visualização
            </TabsTrigger>
            <TabsTrigger value="model" className="flex items-center gap-2">
              <TreePine className="h-4 w-4" />
              Modelo
            </TabsTrigger>
            <TabsTrigger value="dataset" className="flex items-center gap-2">
              <Flower className="h-4 w-4" />
              Dataset
            </TabsTrigger>
          </TabsList>

          <TabsContent value="prediction" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <PredictionForm onPrediction={setPrediction} />

              {prediction && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-green-600" />
                      Resultado da Predição
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{prediction.species}</div>
                      <Badge variant="secondary" className="text-sm">
                        Confiança: {(prediction.confidence * 100).toFixed(1)}%
                      </Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-700">Características Analisadas:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Comprimento Sépala: {prediction.features[0]} cm</div>
                        <div>Largura Sépala: {prediction.features[1]} cm</div>
                        <div>Comprimento Pétala: {prediction.features[2]} cm</div>
                        <div>Largura Pétala: {prediction.features[3]} cm</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="visualization">
            <IrisVisualization />
          </TabsContent>

          <TabsContent value="model">
            <ModelMetrics />
          </TabsContent>

          <TabsContent value="dataset">
            <DatasetInfo />
          </TabsContent>
        </Tabs>

        {/* Project Info */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Sobre o Projeto</CardTitle>
            <CardDescription>Detalhes técnicos e implementação do modelo de Machine Learning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">97.5%</div>
                <div className="text-sm text-gray-600">Acurácia do Modelo</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">150</div>
                <div className="text-sm text-gray-600">Amostras no Dataset</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">Espécies Classificadas</div>
              </div>
            </div>

            <Separator />

            <div className="prose max-w-none">
              <h4 className="font-semibold mb-2">Tecnologias Utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Scikit-learn", "Decision Tree", "Matplotlib", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>Projeto de Machine Learning para classificação de flores Iris</p>
          <p className="text-sm mt-2">Desenvolvido com Next.js, TypeScript e Scikit-learn</p>
        </div>
      </footer>
    </div>
  )
}
