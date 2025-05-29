"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ScatterChartIcon as Scatter } from "lucide-react"

export function IrisVisualization() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Distribuição das Características
          </CardTitle>
          <CardDescription>Análise estatística das medidas por espécie</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { feature: "Comprimento Sépala", setosa: "5.0", versicolor: "5.9", virginica: "6.6" },
              { feature: "Largura Sépala", setosa: "3.4", versicolor: "2.8", virginica: "3.0" },
              { feature: "Comprimento Pétala", setosa: "1.5", versicolor: "4.3", virginica: "5.6" },
              { feature: "Largura Pétala", setosa: "0.2", versicolor: "1.3", virginica: "2.0" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-sm font-medium">{item.feature}</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-red-100 p-2 rounded text-center">
                    <div className="font-semibold text-red-700">Setosa</div>
                    <div>{item.setosa} cm</div>
                  </div>
                  <div className="bg-green-100 p-2 rounded text-center">
                    <div className="font-semibold text-green-700">Versicolor</div>
                    <div>{item.versicolor} cm</div>
                  </div>
                  <div className="bg-blue-100 p-2 rounded text-center">
                    <div className="font-semibold text-blue-700">Virginica</div>
                    <div>{item.virginica} cm</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scatter className="h-5 w-5 text-green-600" />
            Correlação entre Características
          </CardTitle>
          <CardDescription>Relação entre comprimento e largura das pétalas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 bg-gray-50 rounded-lg p-4">
            <div className="absolute inset-4 border-l-2 border-b-2 border-gray-300">
              {/* Simulação de scatter plot */}
              <div className="relative w-full h-full">
                {/* Setosa points */}
                <div className="absolute w-2 h-2 bg-red-500 rounded-full" style={{ left: "10%", bottom: "10%" }}></div>
                <div className="absolute w-2 h-2 bg-red-500 rounded-full" style={{ left: "15%", bottom: "15%" }}></div>
                <div className="absolute w-2 h-2 bg-red-500 rounded-full" style={{ left: "12%", bottom: "12%" }}></div>

                {/* Versicolor points */}
                <div
                  className="absolute w-2 h-2 bg-green-500 rounded-full"
                  style={{ left: "45%", bottom: "45%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-green-500 rounded-full"
                  style={{ left: "50%", bottom: "40%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-green-500 rounded-full"
                  style={{ left: "55%", bottom: "50%" }}
                ></div>

                {/* Virginica points */}
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full" style={{ left: "75%", bottom: "75%" }}></div>
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full" style={{ left: "80%", bottom: "70%" }}></div>
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full" style={{ left: "85%", bottom: "80%" }}></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
              Comprimento da Pétala (cm)
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-600">
              Largura da Pétala (cm)
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Setosa</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Versicolor</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Virginica</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
