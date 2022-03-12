# **Pedagogy**
##### ***Name of the Developers:***
##### Niteesh Babu.G.S, Sayad Pervez B.

#####  ***Institute:***
##### **Rajalakshmi Engineering College**

##### ***Email id:***
##### 1)niteeshbabu.gs.2018.ece@rajalakshmi.edu.in
##### 2)sayadpervez.b.2019.ece@rajalakshmi.edu.in

##### **Department:** ***ECE***

##### **Discipline:** ***ECE***

##### Name of the Lab: **Communication Systems Laboratory(C.S.L)**

##### Name of experiment: ***Pulse Code Modulation and Demodulation***

##### Focus Area :  Experimental Analysis Method

#### About the experiment:
##### **The goal of this experiment is to understand the basic principle of pulse code modulation (PCM) and demodulation and how the analog signal at the transmitter is converted into n-bit binary (digital) using sampler, quantizer and encoder. At the receiver, the baseband signal is retrieved from the encoded binary data by using decoder and reconstruction filter. The required transmission bandwidth, signalling rate and signal to quantization ratio (SQNR) are examined to analyse the performance of PCM system.**

#### 1.	Learning Objectives and Cognitive Level:
| **No**    | **Learning& Objectives** | **Cognitive Level**     | **Action Verb**|
| :---:        |    :----:                 | :----:                  |:----:           |
| **1.)**       | **Students will be able to define pulse code modulation.**| **Remember**           |       **Define**         |
| **2.)**         | **Students will be able to define the process of sampling, quantization, encoding and decoding for pulse code  modulation and demodulation**                      | **Remember**               |       **Define**         |
| **3.)**         | **Students will be able to calculate the required transmission bandwidth and signalling rate of PCM signal**                    | **Apply**                |     **Calculate**           |
| **4.)**         | **Students will be able to analyse the performance of PCM by varying the frequency and amplitude of the input baseband signal**                      | **Analyse**               |      **Analyse**          |
| **5.)**         | **Students will be able to evaluate the signal to quantization ratio (SQNR) of   n-bit binary at the PCM output**                      | **Evaluate**               |      **Evaluate**          |

#### 2. Instructional Strategy:
#####  2. 1 Instructional Strategy:  Experiential Learning
#####   2.2 Assessment Method: Formative Assessment, Pretest and Posttest (Multiple choice questions)
#####   2.3 Description of section:
##### •	Theory aspects for the proposed PCM experiment will be provided for better understanding.
##### •	Step by step procedure to perform the simulation will be given.
##### •	Pretest questions (based on the concept of PCM) & post test questions (based on the observations carried out) will be provided to evaluate the students understanding level.
##### •Additional reference materials related to pulse code modulation and demodulation will be provided.

#### 3. Task & Assessment Questions:


| **No**    | **Instructions given by the Teacher**| **Tasks to be done by the Students**     |**Assessment questions aligned to the task**|**Assessment questions Solutions**|
| :---       |    :----  |          :--- |  :---|:---|
| **1)**     | **State the principle of  Pulse code modulation and demodulation.**     | **Click on the theory button to understand the basic principle of pulse code modulation and demodulation**   |   **Conceptual question (to be asked by teacher): Define Pulse Code Modulation.**      |   **Each message sample is converted into n-bit binary.**  |
| **2)**|**State the basic elements of PCM and its process.**   | **Click on the procedure button and see the blocks present in the simulator to understand the basic elements of PCM.**        | **Arrange the sequence of operations performed in transmitter part of a PCM system**      |**Arrange the sequence of operations performed in transmitter part of a PCM system**|
| **3)**     | **Choose the appropriate values of frequency and amplitude of input sine wave and sampling signal and calculate the theoretical values of transmission bandwidth and signalling rate of PCM.**     | **Click on the Sine wave generator and Sampler blocks to set the suitable values of input sine wave and sampling frequency to perform PCM experiment and compute the parameters.**   |   **What is the transmission bandwidth of n- bit PCM for the message bandwidth of “w” Hz?**      |   **BT = nW**  |
| **4)**   | **Examine the performance of PCM system by repeating the experiment using different set of frequency and amplitude values.**        | **Click on the blocks to reconstruct the PCM circuit for a new set of values and execute the simulator to analyse the output waveforms of the respective blocks and compute the PCM parameters.**      |**Obtain the codeword length of a sample which is quantized into one of 16 levels in PCM.**|**4**|
| **5)**     | **Calculate the output signal to quantization noise ratio (SQNR) for the n-bit binary at the PCM output and verify it with the simulated result.**     | **Click on the Evaluate block at the modulator to obtain the values of SQNR, transmission bandwidth and signalling rate of n-bit PCM for the message bandwidth of “w” Hz.**   |   **Calculate the signal to quantization noise ratio in dB for a 10-bit PCM system.**      |   **61.8 dB**  |

#### 4. Simulator Interactions:

| **No**      | **What students will do?** | **What Simulator will do?**     |**Conclusion of the task**|
| :---        |    :------   |      :--------- | :---|
| **1)**      | **Click on the theory and procedure given in the screen to carry out the Amplitude modulation (AM) and demodulation experiment.**      | **Show the theory and procedure to be followed to simulate the experiment**  |**Identify the functionality and objectives of the experiment.**|
| **2)**  | **Understand the blocks required to build the circuit in the workspace, the modulation index and power calculation.**        | **Display the blocks and formulae to calculate the modulation index and total power of AM signal.**      |**To realize the theoretical concepts in the simulation environment.**|
| **3)**     | **Open the workspace and click on the “Edit” button to drag and drop the blocks across the workspace and also set the properties of sine wave generators .**      | **Display the blocks with the required modulating and carrier signals.** |**To select the amplitude and frequency parameters of carrier and modulating signals.**|
|**4)**   |**Draft a layout for the types of AM (DSB-FC, DSB-SC & SSB)(this is purely based on user's discretion). Drag the multiplier(balanced modulator),adder and output from the blocks menu and make the required connections.**         | **Display the complete illustration of AM modulator/ demodulator in the workspace.**     | **To observe the different types of AM waves.**|
| **5)**     | **Double Click on the “Sine Wave Generator” blocks of the message signal and carrier signal to vary the amplitude and frequency of both the signals, and then click on the respective output blocks to view modulated/demodulated signals.**      | **Show the modulated signal in the scope in accordance with the variation in the modulating and carrier signal.**   | **To observe the effects of amplitude variations of signals on modulation index (over modulation, under modulation and critical modulation). To obtain the spectrum of AM signal and to evaluate the modulation index, carrier power, total transmitted power and efficiency of all the types of AM system.**|
| **6)**   | **Click on the “Edit” button to choose the components required to build AM demodulator in the exiting workspace. Drag the blocks and do the necessary connections.**        | **Display the AM demodulator circuit in the workspace along with AM modulator.**      | **To obtain the modulating signal from the modulated signal.**|

#### Simulator Workspace and Workflow:
##### Simulator Workspace:

![Simulator Workspace](./images/PCM%20workspace.png)

##### Evaluate Block Output:

![Evaluate Block Output](./images/08.png)


