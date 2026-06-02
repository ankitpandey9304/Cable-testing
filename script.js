function showScreen(id){

    let screens =
    document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.style.display = "none";
    });

    document.getElementById(id)
            .style.display = "block";
}

function runTest(){

    let cable =
    document.getElementById("cable").value;

    let length =
    parseFloat(
    document.getElementById("length").value);

    let dataSize =
    parseFloat(
    document.getElementById("dataSize").value);

    if(!length || !dataSize){

        alert(
        "Please enter Cable Length and Data Size"
        );

        return;
    }

    let bandwidth;
    let baseLatency;
    let packetLoss;

    if(cable === "UTP"){

        bandwidth = 1000;
        baseLatency = 10;
        packetLoss = 2;
    }

    else if(cable === "Coaxial"){

        bandwidth = 10000;
        baseLatency = 5;
        packetLoss = 1;
    }

    else{

        bandwidth = 100000;
        baseLatency = 1;
        packetLoss = 0.01;
    }

    let latency =
    baseLatency + (length * 0.02);

    let transferTime =
    ((dataSize * 8) / bandwidth)
    .toFixed(4);

    let health;

    if(latency < 10){

        health = "Excellent 🟢";
    }

    else if(latency < 20){

        health = "Good 🟡";
    }

    else{

        health = "Poor 🔴";
    }

    document.getElementById("result")
    .innerHTML = `

    <p>🔌 <b>Cable:</b> ${cable}</p>

    <p>📏 <b>Length:</b> ${length} m</p>

    <p>💾 <b>Data Size:</b> ${dataSize} MB</p>

    <hr>

    <p>⚡ <b>Bandwidth:</b> ${bandwidth} Mbps</p>

    <p>📡 <b>Latency:</b> ${latency.toFixed(2)} ms</p>

    <p>📉 <b>Packet Loss:</b> ${packetLoss}%</p>

    <p>⏱️ <b>Transfer Time:</b> ${transferTime} sec</p>

    <p>🌐 <b>Network Health:</b> ${health}</p>

    <p>✅ <b>Status:</b> PASS</p>
    `;

    showScreen("resultScreen");
}