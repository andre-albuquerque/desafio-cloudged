const converter = () => {
    let input = document.getElementById('input').value;

    let splitted = input.toUpperCase().replace(/\"/g, '').split(',');

    let baseOrigem = splitted[0].trim().substring(3, 0);

    let numeroOrigem = splitted[1].trim();

    let baseDestino = splitted[2].trim().substring(3, 0);


    document.getElementById('entrada').innerHTML = baseOrigem + ',' + numeroOrigem + ',' + baseDestino

    if (baseOrigem === 'DEC'){

        document.getElementById('resultado').innerHTML = 'Sistema decimal'

        if (baseDestino === 'DEC'){            

            document.getElementById('resultado').innerHTML = numeroOrigem

        }else if (baseDestino === 'HEX'){

            let resultado = parseInt(numeroOrigem, 10).toString(16)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

            

        }else if (baseDestino === 'OCT'){

            let resultado = parseInt(numeroOrigem, 10).toString(8)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

        }else{
            let resultado = parseInt(numeroOrigem, 10).toString(2)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }
        }

    }else if (baseOrigem === 'HEX'){        
        
        if (baseDestino === 'DEC'){

            let resultado = parseInt(numeroOrigem, 16)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

        }else if (baseDestino === 'HEX'){

            document.getElementById('resultado').innerHTML = numeroOrigem

        }else if (baseDestino === 'OCT'){

            let resultado = parseInt(numeroOrigem, 16).toString(8)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }


        }else{
            let resultado = parseInt(numeroOrigem, 16).toString(2)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }
        }

    }else if (baseOrigem === 'OCT'){

        if (baseDestino === 'DEC'){

            let resultado = parseInt(numeroOrigem, 8)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

        }else if (baseDestino === 'HEX'){

            let resultado = parseInt(numeroOrigem, 8).toString(16)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

        }else if (baseDestino === 'OCT'){

            document.getElementById('resultado').innerHTML = numeroOrigem

        }else{

            let resultado = parseInt(numeroOrigem, 8).toString(2)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }
                        
        }

    }else if (baseOrigem === 'BIN'){

        if (baseDestino === 'DEC'){

            let resultado = parseInt(numeroOrigem, 2)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

        }else if (baseDestino === 'HEX'){

            let resultado = parseInt(numeroOrigem, 2).toString(16)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }
            
        }else if (baseDestino === 'OCT'){

            let resultado = parseInt(numeroOrigem, 2).toString(8)

            if (resultado === 'NaN'){
                document.getElementById('resultado').innerHTML = 'Número de entrada inválido.'
            }else{
                document.getElementById('resultado').innerHTML = resultado
            }

        }else{
            document.getElementById('resultado').innerHTML = numeroOrigem
        }

    }else{
        document.getElementById('resultado').innerHTML = 'Base númerica inválida'
    }
}