// https://www.omnicalculator.com/finance/real-interest-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const realinterestrateRadio = document.getElementById('realinterestrateRadio');
const nominalinterestrateRadio = document.getElementById('nominalinterestrateRadio');
const expectedinflationrateRadio = document.getElementById('expectedinflationrateRadio');

let realinterestrate;
let nominalinterestrate = v1;
let expectedinflationrate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

realinterestrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal interest rate';
  variable2.textContent = 'Expected inflation rate';
  nominalinterestrate = v1;
  expectedinflationrate = v2;
  result.textContent = '';
});

nominalinterestrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Real interest rate';
  variable2.textContent = 'Expected inflation rate';
  realinterestrate = v1;
  expectedinflationrate = v2;
  result.textContent = '';
});

expectedinflationrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Real interest rate';
  variable2.textContent = 'Nominal interest rate';
  realinterestrate = v1;
  nominalinterestrate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(realinterestrateRadio.checked)
    result.textContent = `Real interest rate = ${computerealinterestrate().toFixed(2)}`;

  else if(nominalinterestrateRadio.checked)
    result.textContent = `Nominal interest rate = ${computenominalinterestrate().toFixed(2)}`;

  else if(expectedinflationrateRadio.checked)
    result.textContent = `Expected inflation rate = ${computeexpectedinflationrate().toFixed(2)}`;
})

// calculation

function computerealinterestrate() {
  return Number(nominalinterestrate.value) - Number(expectedinflationrate.value);
}

function computenominalinterestrate() {
  return Number(realinterestrate.value) + Number(expectedinflationrate.value);
}

function computeexpectedinflationrate() {
  return Number(nominalinterestrate.value) - Number(realinterestrate.value);
}