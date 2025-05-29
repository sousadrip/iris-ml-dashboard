"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Target, TrendingUp, CheckCircle } from "lucide-react"

export function ModelMetrics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-green-600" />
            Árvore de Decisão - Estrutura do Modelo
          </CardTitle>
          <CardDescription>Visualização simplificada da árvore de decisão treinada</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center space-y-4">
              {/* Root node */}
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 mx-auto max-w-xs">
                <div className="font-semibold text-blue-800">Comprimento Pétala ≤ 2.45?</div>
                <div className="text-xs text-blue-600">150 amostras</div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>

              {/* Level 1 */}
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="bg-red-100 border-2 border-red-300 rounded-lg p-3">
                    <div className="font-semibold text-red-800">Setosa</div>
                    <div className="text-xs text-red-600">50 amostras</div>
                    <Badge variant="secondary" className="mt-1">
                      100% puro
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Sim</div>
                </div>

                <div className="text-center">
                  <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3">
                    <div className="font-semibold text-yellow-800">Largura Pétala ≤ 1.75?</div>
                    <div className="text-xs text-yellow-600">100 amostras</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Não</div>
                </div>
              </div>

              <div className="flex justify-end mr-8">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>

              {/* Level 2 */}
              <div className="flex justify-end gap-8 mr-8">
                <div className="text-center">
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3">
                    <div className="font-semibold text-green-800">Versicolor</div>
                    <div className="text-xs text-green-600">54 amostras</div>
                    <Badge variant="secondary" className="mt-1">
                      91% puro
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Sim</div>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3">
                    <div className="font-semibold text-purple-800">Virginica</div>
                    <div className="text-xs text-purple-600">46 amostras</div>
                    <Badge variant="secondary" className="mt-1">
                      98% puro
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Não</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Métricas de Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Acurácia</span>
                <Badge variant="default">97.5%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Precisão</span>
                <Badge variant="secondary">96.8%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Recall</span>
                <Badge variant="secondary">97.1%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">F1-Score</span>
                <Badge variant="secondary">96.9%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Matriz de Confusão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-1 text-xs">
              <div></div>
              <div className="text-center font-semibold">Setosa</div>
              <div className="text-center font-semibold">Versicolor</div>
              <div className="text-center font-semibold">Virginica</div>

              <div className="font-semibold">Setosa</div>
              <div className="bg-green-100 text-center p-2 rounded">10</div>
              <div className="bg-red-100 text-center p-2 rounded">0</div>
              <div className="bg-red-100 text-center p-2 rounded">0</div>

              <div className="font-semibold">Versicolor</div>
              <div className="bg-red-100 text-center p-2 rounded">0</div>
              <div className="bg-green-100 text-center p-2 rounded">9</div>
              <div className="bg-red-100 text-center p-2 rounded">1</div>

              <div className="font-semibold">Virginica</div>
              <div className="bg-red-100 text-center p-2 rounded">0</div>
              <div className="bg-red-100 text-center p-2 rounded">0</div>
              <div className="bg-green-100 text-center p-2 rounded">10</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Características do Modelo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Parâmetros do Modelo:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Algoritmo: Decision Tree Classifier</li>
                <li>• Critério: Gini Impurity</li>
                <li>• Profundidade máxima: Automática</li>
                <li>• Min. amostras por folha: 1</li>
                <li>• Random state: 42</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Características dos Dados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 4 features numéricas</li>
                <li>• 3 classes balanceadas</li>
                <li>• 150 amostras totais</li>
                <li>• Split: 80% treino, 20% teste</li>
                <li>• Sem valores faltantes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
