"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Brain, Loader2 } from "lucide-react"

interface PredictionFormProps {
  onPrediction: (result: {
    species: string
    confidence: number
    features: number[]
  }) => void
}

export function PredictionForm({ onPrediction }: PredictionFormProps) {
  const [features, setFeatures] = useState({
    sepalLength: "5.0",
    sepalWidth: "3.6",
    petalLength: "1.4",
    petalWidth: "0.2",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handlePredict = async () => {
    setIsLoading(true)

    // Simular predição do modelo
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const featureValues = [
      Number.parseFloat(features.sepalLength),
      Number.parseFloat(features.sepalWidth),
      Number.parseFloat(features.petalLength),
      Number.parseFloat(features.petalWidth),
    ]

    // Lógica simplificada de classificação baseada nas regras da árvore de decisão
    let species = "Setosa"
    let confidence = 0.95

    if (featureValues[2] <= 2.45) {
      species = "Setosa"
      confidence = 0.98
    } else if (featureValues[3] <= 1.75) {
      if (featureValues[2] <= 4.95) {
        species = "Versicolor"
        confidence = 0.94
      } else {
        species = "Virginica"
        confidence = 0.89
      }
    } else {
      species = "Virginica"
      confidence = 0.96
    }

    onPrediction({
      species,
      confidence,
      features: featureValues,
    })

    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFeatures((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-600" />
          Fazer Predição
        </CardTitle>
        <CardDescription>Insira as medidas da flor para classificar a espécie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="sepal-length">Comprimento da Sépala (cm)</Label>
            <Input
              id="sepal-length"
              type="number"
              step="0.1"
              value={features.sepalLength}
              onChange={(e) => handleInputChange("sepalLength", e.target.value)}
              placeholder="Ex: 5.0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sepal-width">Largura da Sépala (cm)</Label>
            <Input
              id="sepal-width"
              type="number"
              step="0.1"
              value={features.sepalWidth}
              onChange={(e) => handleInputChange("sepalWidth", e.target.value)}
              placeholder="Ex: 3.6"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="petal-length">Comprimento da Pétala (cm)</Label>
            <Input
              id="petal-length"
              type="number"
              step="0.1"
              value={features.petalLength}
              onChange={(e) => handleInputChange("petalLength", e.target.value)}
              placeholder="Ex: 1.4"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="petal-width">Largura da Pétala (cm)</Label>
            <Input
              id="petal-width"
              type="number"
              step="0.1"
              value={features.petalWidth}
              onChange={(e) => handleInputChange("petalWidth", e.target.value)}
              placeholder="Ex: 0.2"
            />
          </div>
        </div>

        <Button onClick={handlePredict} className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Classificando...
            </>
          ) : (
            <>
              <Brain className="h-4 w-4 mr-2" />
              Classificar Espécie
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
