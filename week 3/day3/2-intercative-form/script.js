const openFormBtn = document.getElementById('openFormBtn');
const formModal = document.getElementById('formModal');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById("step3")
const step4 = document.getElementById("step4")
const nextStep1Btn = document.getElementById('nextStep1');
const nextStep2Btn = document.getElementById('nextStep2');
const nextStep3Btn = document.getElementById('nextStep3');
const nextStep4Btn = document.getElementById('nextStep4')



openFormBtn.addEventListener('click', function() {
  formModal.style.display = 'block';
});

nextStep1Btn.addEventListener('click', function() {
  step1.style.display = 'none';
  step2.style.display = 'block';
});
nextStep2Btn.addEventListener('click', function() {
    step2.style.display = 'none';
    step3.style.display = 'block';
  });
  nextStep3Btn.addEventListener('click', function() {
    step3.style.display = 'none';
    step4.style.display = 'block';
  });
nextStep4Btn.addEventListener('click', function() {
  formModal.style.display = 'none';
});
