class SimpleGraph {
    drawBarChart(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }

    // Se agregaron con el tiempo
    drawPieChart(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica adaptada para dibujar gráficos de pastel
    }

    drawRadialChart(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica adaptada para dibujar gráficos radiales
    }

    // ... otras visualizaciones adaptadas.
}

interface Chart{
    draw(data: number[]): void;
}

class Bart implements Chart{
    draw(data: number[]): void {
        console.log("Drawing bar chart:", data);
    }
}

class Pie implements Chart{
    draw(data: number[]): void {
        console.log("Drawing Pie chart:", data);
    }
}

class Radial implements Chart{
    draw(data: number[]): void {
        console.log("Drawing raidal chart:", data);
    }
}
