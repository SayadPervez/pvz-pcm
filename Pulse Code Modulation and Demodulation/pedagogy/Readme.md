# **Pedagogy**
##### ***Name of the Developers:***
##### Niteesh Babu.G.S, Shiva Shankar. U, Sanjeev Kumaar.M, V.Narayanan.

#####  ***Institute:***
##### **Rajalakshmi Engineering College**

##### ***Email id:***
##### 1)niteeshbabu.gs.2018.ece@rajalakshmi.edu.in
##### 2)shivashankar.u.2018.ece@rajalakshmi.edu.in
##### 3)sanjeevkumaar.m.2018.ece@rajalakshmi.edu.in
##### 4)narayanan.v.2018.ece@rajalakshmi.edu.in.

##### **Department:** ***ECE***

##### **Discipline:** ***ECE***

##### Name of the Lab: **Communication Systems Laboratory(C.S.L)**

##### Name of experiment: ***Amplitude Modulation and Demodulation***

##### Focus Area :  Experimental Analysis Method

#### About the experiment:
##### **This experiment focuses on understanding the principle of amplitude modulation & demodulation.  This experiment is formulated to study the performance of various types of amplitude modulation schemes (DSB-FC, DSB-SC & SSB) for different modulation index and also its impact on modulated signal can be analyzed. Furthermore, the  modulation index, efficacy and the   total transmitted power for each category of the amplitude modulation can be estimated and verified.**

#### 1.	Learning Objectives and Cognitive Level:
| **No**    | **Learning& Objectives** | **Cognitive Level**     | **Action Verb**|
| :---:        |    :----:                 | :----:                  |:----:           |
| **1.)**       | **To provide familiarization to generate an amplitude modulated signal with various m values**| **Understand**           |       **Identify**         |
| **2.)**         | **To analyze  both time and frequency variation of AM signal**                      | **Analyze**               |       **Examine**         |
| **3.)**         | **To measure the percentage modulation(%m) and also the percentage of total power  in both the sidebands and the carrier  versus the modulation index(m)**                    | **Apply**                |     **Calculate**           |
| **4.)**         | **To investigate the use of  detection/demodulation  in demodulating the AM signal**                      | **Evaluate**               |      **Conclude**          |

#### 2. Instructional Strategy:
#####  2. 1 Instructional Strategy:  Experiential Learning
#####   2.2 Assessment Method: Formative Assessment (Multiple choice questions, Written exercises)
#####   2.3 Description of section:
##### •	Theory aspects for the proposed experiment will be provided for better understanding.
##### •	Step by step procedure to perform the experiment will be given.
##### •	Pre test (based on the concept of AM) & Post test (based on the simulation) would be assigned to the user
##### •	Additional reference materials will be provided.

#### 3. Task & Assessment Questions:


| **No**    | **Instructions given by the Teacher**| **Tasks to be done by the Students**     |**Assessment questions aligned to the task**|**Assessment questions Solutions**|
| :---       |    :----  |          :--- |  :---|:---|
| **1)**     | **Browse through the theory ,procedure so as to perform the simulation of amplitude modulation with ease**     | **Click on the theory icon to display the theory, step by step procedure to guide the student to perform the process of simulating amplitude modulation & demodulation**   |   **Conceptual question (to be asked by teacher): Define Amplitude Modulation**      |   **Amplitude Modulation is a modulation technique in which the amplitude of the carrier wave varies with respect to the amplitude of the modulating signal(message signal)**  |
| **2)**   | **Choose an appropriate value as the input signal frequency so that the input signal modulates the carrier signal with proper amplitude and frequency values**        | **Click on the sine wave generator block to select appropriate baseband and carrier signal**      |**Conceptual question (to be asked by teacher): Amplitude of modulating signal is_________**|**Less than amplitude of carrier wave**|
| **3)**     | **Compute the modulation index manually for the specified inputs manually and compare the same with the simulation generated modulation index.**     | **The simulator allocates the modulation index, m<1, m=1, m>1 based on the input specified, based on which the user can understand the changes in time domain of modulated waveform also the student should compute the modulation index manually based on the inputs and compare the same.**   |   **Conceptual question (to be asked by teacher): The modulation index of an over modulated wave is___________**      |   **Modulation Index(m)>1**  |
| **4)**   | **Choose the type of modulation to be performed on the carrier signal with respect to baseband signal.**        | **The user has the liberty to choose between the types of modulation in which he/she would like to perform , the user can even choose to perform all the three types of modulation simultaneously at ease based on which the user has to connect the blocks for both modulator and Demodulator section.**      |**Conceptual question (to be asked by teacher):In an AM wave useful power is carrier by___________**|**Sidebands**|
| **5)**     | **Analyze the frequency content of modulated signal.**     | **Click on the respective output blocks (DSB-FC: Adder/Envelope Detector, DSB-SC: Balanced Modulator/DSB-SC Demodulator, SSB: Filter/SSB-Demodulator) to see the analysis of AM wave.**   |   **Formative question quiz :1) DSB-FC: Does DSB-FC Wave consists of carrier and two sidebands?  2)DSB-SC: Addition of a carrier signal to DSB-SC results in ? 3) For SSB generation which modulated signal should be used ?**      |   **1) True   2) DSB-FC 3) DSB-SC**  |
| **6)**   | **Calculate the power values for all the types of modulation and find the efficiency  and conclude the best modulation technique based on the computed values(manually) for the same .**        | **The student should first attain the values of the amplitude and modulation index values which are required to be calculated so as to compute total power and efficiency (manually)**      |**Conceptual question (to be asked by teacher): 6.	categorize the level of modulation in which Am= 3V and Ac=4V.**|**Under modulation**|

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

![Simulator Workspace](./images/s2.png)

##### Amplitude Modulation process Workflow:

![Amplitude Modulation process workflow](./images/amww.png)

##### Amplitude Modulation Workspace:

![Amplitude Modulation process workflow](./images/amw.png)

##### Amplitude Demodulation process Workflow:

![Amplitude Demodulation process workflow](./images/adww.png)

##### Amplitude Demodulation Workspace:

![Amplitude Demodulation process workflow](./images/adw.png)
