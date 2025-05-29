"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flower, Database, Info, BookOpen } from "lucide-react"

export function DatasetInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Dataset Iris - Informações Gerais
          </CardTitle>
          <CardDescription>
            Um dos datasets mais famosos em Machine Learning, criado por Ronald Fisher em 1936
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">150</div>
              <div className="text-sm text-gray-600">Total de Amostras</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Características</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600">Espécies</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flower className="h-5 w-5 text-green-600" />
              Espécies de Iris
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="font-semibold text-red-800">Iris Setosa</div>
                <div className="text-sm text-red-600">
                  Facilmente distinguível pelas pétalas pequenas e sépalas largas
                </div>
                <Badge variant="outline" className="mt-2">
                  50 amostras
                </Badge>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="font-semibold text-green-800">Iris Versicolor</div>
                <div className="text-sm text-green-600">
                  Características intermediárias, mais difícil de classificar
                </div>
                <Badge variant="outline" className="mt-2">
                  50 amostras
                </Badge>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="font-semibold text-blue-800">Iris Virginica</div>
                <div className="text-sm text-blue-600">Maior das três espécies, com pétalas e sépalas grandes</div>
                <Badge variant="outline" className="mt-2">
                  50 amostras
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-orange-600" />
              Características Medidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">Comprimento da Sépala</span>
                <span className="text-sm text-gray-600">4.3 - 7.9 cm</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">Largura da Sépala</span>
                <span className="text-sm text-gray-600">2.0 - 4.4 cm</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">Comprimento da Pétala</span>
                <span className="text-sm text-gray-600">1.0 - 6.9 cm</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">Largura da Pétala</span>
                <span className="text-sm text-gray-600">0.1 - 2.5 cm</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-purple-600" />
            Importância Histórica e Aplicações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose max-w-none">
            <p className="text-gray-700">
              O dataset Iris é considerado o "Hello World" do Machine Learning. Criado pelo estatístico e biólogo Ronald
              Fisher em 1936, este conjunto de dados tem sido usado por décadas para:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Aplicações Educacionais:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Introdução a algoritmos de classificação</li>
                  <li>• Demonstração de análise discriminante</li>
                  <li>• Visualização de dados multidimensionais</li>
                  <li>• Comparação de diferentes modelos ML</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Características Técnicas:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dataset pequeno e bem balanceado</li>
                  <li>• Sem valores faltantes</li>
                  <li>• Classes linearmente separáveis</li>
                  <li>• Ideal para algoritmos simples</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
