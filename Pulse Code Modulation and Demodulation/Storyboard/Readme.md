# StoryBoard

#### Proposal ID : **`CHANGE ME AAAAAAH`**

#### Experiment Name : ***Pulse Code Modulation and Demodulation***


#### Story Outline:
##### **Pulse code modulation (PCM) is a type of analog to digital (A/D) conversion technique in which the input analog signal is sampled at regular intervals and the information in each sample is represented in digital form. The goal of this experiment is to understand the basic principle of pulse code modulation (PCM) and demodulation and how well the analog signal at the transmitter is converted into n-bit binary (digital) using a sampler, quantizer and encoder. Sampling is the process of converting continuous time signals into discrete time signals. The continuous amplitude signal is converted into discrete amplitude signal by means of quantizer and the signal discrete in both time and amplitude into digital using encoder. The baseband signal at the receiver is retrieved from the encoded binary data by using decoder and reconstruction filter. The required transmission bandwidth, signaling rate, step size and signal to quantization noise ratio (SQNR) are examined to evaluate the performance of the PCM system.**

#### Story:

##### **The simulator workspace comprises the blocks such as sine wave generator, sampler, quantizer, encoder, decoder, reconstruction filter and evaluate block. The position of the blocks are static and wires are to be connected by the user as per the block diagram to perform pulse code modulation and demodulation. The user has to set the amplitude and frequency parameters of input blocks to perform the simulation and view the output of pulse code modulation and demodulation. The parameters such as Transmission Bandwidth, step size, signaling rate and signal to quantization noise ratio can be observed using the “Evaluate” block.**



#### Set User Objectives & Goals:

##### **1) State the principle of pulse code modulation and demodulation**
##### **2) Recall sampling, quantization, encoding and decoding process for analog to digital conversion.**
##### **3) Calculate the required transmission bandwidth and signaling rate of PCM signal.**
##### **4) Analyze the performance of the PCM system by varying the frequency and amplitude of the input baseband signal.**
##### **5) Evaluate signal to quantization ratio (SQNR) of PCM signal to analyze the efficacy of PCM.**

#### Pathway activities:


##### 1) Students should click on the theory icon to browse through the theory and procedure for simulating Pulse Code Modulation and Demodulation.
##### 2) The user should next connect the blocks as per the block diagram. This is done by clicking the connection points (red circles on every block) in the correct order.
##### 3) Double click the sine wave generator block to set the amplitude and frequency of the input signal.
##### 4) Double click the sampler block to set the frequency of the sampler(sampling frequency).
##### 5) Double click the quantizer block to view the discrete representation of input sine wave.
##### 6) Double click the encoder block to observe the binary representation of PCM waves for various bit lengths.
##### 7) Double click the decoder block and reconstruction filter block to retrieve the input sine waveform.
##### 8) Double click the “Evaluate” block to view the overall PCM plot and transmission bandwidth, step size, signaling rate and SQNR of the system are observed.
##### 9) Vary the amplitude and frequency of input sine wave and sampling frequency to observe the simulated result for various input parameters.
##### 10) Calculate the parameters such as transmission bandwidth, step size, signaling rate and SQNR for the proposed circuit and compare the same with the simulation generated values.


#### Set Challenges and Questions/Complexity/variation
### **Pre Test Section :**

#### **Note**:
##### ***These questions are asked to examine the Theoretical knowledge absorbed by the user  during the theory class.***
##### ***Please do answer all the questions below within the allocated time to avoid any errors.***

##### Number of Questions:5
##### Question Pattern: MCQ


#### **Quick Quiz**
##### 1.	Identify the suitable digital pulse modulation which represent the signal in the form of sequence of coded pulses.?
 A.	AM

 B.	FM

 C.	PM

 ***D.	PCM***



##### 2.	Calculate the signal to quantization noise ratio of 7- bit PCM system for the message bandwidth of 500 Hz.
 A.	53.8 dB

 ***B.	43.8 dB***

 C.	63.8 dB

 D.	33.8 dB



##### 3.	What is the drawback of PCM ?
 A.	Increased delay

***B. Increased bandwidth***

 C.	Analog Output

 D.	Digital Output



#####  4.	Find the transmission bandwidth and signaling rate of 9- bit PCM for the message bandwidth of 800Hz.
 ***A.	7.2KHz, 14.4Kbps***

 B.	8KHz,16Kbps

 C.	6kHz, 3Kbps

 D.	9.2 KHz, 9.2Kbps



##### 5.	Identify the block in PCM which converts continuous amplitude samples into discrete amplitude samples.
 A.	Sampler

 B.	Encoder

 ***C.	Quantizer***

 D.	Repeater


### **Post Test Section**
#### **Note**:
##### ***These questions are asked to check the knowledge attained by the user after performing the experiment.***
##### ***Please do answer all the questions below within the allocated time to avoid any errors.***

##### Number of Questions: **`CHANGE ME AAAAAAH`**
##### Question Pattern: MCQ

#### **Quick Quiz**
#### **`Waiting for POSTTEST QUESTIONS`**
#### **`Change the below section. AAAAAAAAAAAH`**
```
##### 1. The frequency and amplitude of the carrier signal should be _______ compared to baseband signal.
 ***A.	Greater than***

 B.	Less than

 C.	Equal to

 D.	None of the Above


##### 2. Point the condition to be satisfied for modulation without any distortion in practice.
 A.	m=1

***B.	m<1***

C.	m>1

 D.	m=0


##### 3. How do you eliminate the occurrence of carrier signal in the generation of DSB-SC waveform?
 ***A.	Multiplying carrier and modulating signal***

 B.	Adding carrier and modulating signal

 C.	Subtracting modulating signal from the carrier signal

 D.	Adding the mean value of modulating and carrier signals


##### 4. Which among the following modulation technique is more efficient?
 A.DSB-FC

 B.DSB-SC

 ***C.SSB-SC***

D. Both B&C



##### 5. How do you retrieve the modulating signal from DSB-FC signal?
 A.    Balanced modulator

B.     Switching modulator

***C.      Envelope detector***

 D.      Square law modulator
```

#### Conclusion:

**By doing the above experiment the user would get familiarized with the concept of pulse code modulation and demodulation.**
##### **Time required to perform the virtual experiment.**
**The approximate time required to understand the procedure to perform the  experiment would take about 5 min. To connect all the different blocks and to set the input parameter for modulation & demodulation will take another 7 min. Analyzing the output with theory calculations will take 5 min. Answering the assessment questions will take about 5 min. The total time needed to perform the experiment is around 22 mins.**


#### Equations/formulas:

| **Theory**     | **Formulae** |   **Description**|
| :-----------: | :------------: | :-----------: |
|**Transmission Bandwidth, Bt (Hz)**     | **Bt = nW**  |   **n🡪 number of bits/sample, W🡪 Message Bandwidth**|
| **Step Size, S (V)**   | **S=(2*Amax)/L**      |       **Amax🡪  Maximum Amplitude of the input signal, L🡪 Number of quantization levels**|
| **Signaling Rate, r (bits/sec)**   | **r = 2nW**      |       **n🡪 number of bits/sample, W🡪 Message Bandwidth**          |
| **Signal to quantization noise ratio, SQNR (dB)**   | **SQNR = 1.8 + 6n**      |       **n🡪 number of bits/sample**          |

#### Flowchart:

![Flow Chart](./flowchart/flow.png)

#### Mindmap:

![Mindmap](./mindmap/mm.png)

## **Storyboard:**
### **Procedure:**
##### **Equipment’s/Components Required:**

|    **Name of equipment/component**   | **Quantity required/used** |
| :---:        |    :----:   |  
| **1)Wave Generator/Sine wave Generator block**     | **2**      |
| **2) Balanced Modulator block**   | **1**       |
| **3)Adder block**   | **1**       |
| **4)Side Band Suppress Filter (SSBF)/Filter block**   | **1**       |
| **5)Envelope Detector block**   | **1**       |
| **6)SSB Demodulator block**   | **1**       |
| **7)DSB-SC Demodulator block**   | **1**       |
| **8)Output Block**   | **as per user's requirements (min:3)**       |

#### **Step by Step Procedure to perform experiment**

##### **A)Amplitude Modulation**

##### **Step1:** The user should Click on the theory under which the concept behind the working of the experiment would be displayed followed by the procedure which would be displayed in the screen, so that the user could perform the Amplitude modulation (AM) and demodulation experiment based on the guidelines listed under the procedure.

#####  **Step2**:Once the user performs Step1, then the user should avail the “Edit” option, after which the select/drop function blocks (which are uniformly categorized in the toolbox pane (which would be situated in the left pane) would be displayed to the user, based on which the user could use the select/drop function offered by the blocks where the user would initially select their desired block and could place them in the workspace.

![Workspace](./storyboard/s2.png)

![Workspace](./storyboard/s3.png)


##### **Step3:** Once the user performs Step2, then the user could perform the type of Amplitude Modulation/Demodulation from the various block layout diagram displayed under the Amplitude Modulation Procedure (at the end). These types include.

    DSB-FC -“Double Sideband Full Carrier System”
    DSB-SC – “Double Sideband Suppressed Carrier System”
    SSB – “Single Side Band System”


##### **Step4:** Once the user performs Step 4, then the user could very well single click on the wave generator  blocks(carrier and message signal) and tune the respective parameters like (varying the amplitude, frequency of both the message & carrier signal by entering the values under the category which would then yield the desired output to the user during the execution of the experiment.

**Note: The Frequency and Amplitude of Carrier Signal must be higher than the frequency and amplitude of the message signal.**


##### Tuning the parameters of the Wave Generator before placing the block

![Workspace](./storyboard/s-3.png)

##### Tuning the parameters of the Wave Generator after placing the block

![Workspace](./storyboard/s-3b.png)


![Workspace](./storyboard/s-3C.png)


##### **Step5:**  Once the user performs Step 4, then the user could then connect the blocks using the connecting wires option (which would come into play as soon as the edges/nodes of the blocks are clicked) as per the guidelines/circuit diagram/layout diagram depicted under the Amplitude Modulation(at the end).

##### Sample wiring layout for connecting the various blocks:

![Workspace](./storyboard/s4.png)


##### **Step6:** Once the user performs Step 5, then the user could simulate the amplitude modulation by navigating through the respective output blocks (DSB-FC: Adder,DSB-SC: Balanced Modulator ,SSB: Filter) which would then start the simulation by compiling the design i.e. (Checking for  any loose connections between the blocks, etc) ,once the Compilation of the design model is completed then the output  waveform would be displayed along with signal power. For Information about modulation index, classification of  the type of modulation(based on the below categories)would be displayed at the output of Balanced modulator block.

    Over modulation,
    Under modulation  
    Critical modulation

##### **Sample Input waveforms required to perform process of  Amplitude Modulation:**

##### Sample Input for the  carrier signal (FG1):

![Input](./storyboard/si1.png)

##### Sample Input for the  message signal (FG2):

![Input](./storyboard/si2.png)

##### **Sample Output waveforms depicting the  process of  Amplitude Modulation:**

##### Sample output for DSB-FC:

![Output](./storyboard/DSB-FCO.png)

##### Sample output for DSB-SC:

![Output](./storyboard/DSB-SC.png)

##### Sample output for SSB:

![Output](./storyboard/fili.png)


##### **Step7:** Once the user performs Step 6,then the user has successfully performed the Amplitude Modulation and the below Figure depicts the workspace to perform the experiment of Amplitude Modulation.


##### Amplitude Modulation process Workflow:

![Amplitude Modulation process workflow](./storyboard/amww.png)

##### Amplitude Modulation Workspace:

![Amplitude Modulation process workflow](./storyboard/amw.png)

#### Note :

##### **1) In the Simulator to view the  DSB-SC Waveform as output do click on the Balanced Modulator block**

##### **2) In the Simulator to view the  DSB-FC Waveform as output do click on the adder block**

##### **3) In the Simulator to view the  SSB Waveform as output do click on the filter block**

##### **4) To view parameters like Power and efficiency of the type of modulation kindly click on the output block of each of the subcategory**


##### **B)Amplitude Demodulation**

##### **Step1:** Once the user performs the Amplitude Modulation, then the user would be directed to a the same page where the user should avail the “Edit” option after which the select/drop function blocks (which are uniformly categorized in the toolbox pane situated in the left ) would be displayed to the user,  based on which the user could use the select/drop function offered by the blocks where the user would initially select their desired block and could place them in the workspace  based on the layout of demodulation depicted under the Amplitude Demodulation Procedure (at the end) .

##### **Step2:** Once the user performs Step 1, then the user could then connect the blocks using the connecting wires option  (which would come into play as soon as the edges of the blocks/nodes are clicked) as per the guidelines/circuit diagram / layout diagram depicted under the Amplitude Demodulation(at the end).

##### Sample wiring layout for connecting the various blocks:

![Workspace](./storyboard/s4.png)


#####  **Step3:** Once the user performs Step 2,  then the user has to click on the "output" blocks which  would simulate the amplitude demodulation i.e. automatically the compilation of  the design would commence i.e. (Checking for any loose connections between the blocks, etc), once the Compilation of the design model is completed then the output process i.e., the extraction of the modulated signal from the modulating signal. Would be performed and the output which is the modulated signal (a.k.a message signal).

##### **Sample output waveforms depicting the process of  Amplitude Demodulation:**

##### Sample output waveform for Demodulation of a for DSB-FC waveform:

![Output](./storyboard/s5.png)

##### Sample output waveform for Demodulation of a DSB-SC waveform:

![Output](./storyboard/s8.png)

##### Sample output waveform for Demodulation of a  SSB  waveform:

![Output](./storyboard/s7.png)



##### **Step4:** Once the user performs Step 3, then the user has successfully performed the Amplitude Demodulation and the below figure depicts the workspace to perform the experiment of Amplitude Demodulation.

##### Amplitude Demodulation process Workflow:

![Amplitude Demodulation process workflow](./storyboard/adww.png)

##### Amplitude Demodulation Workspace:

![Amplitude Demodulation process workflow](./storyboard/adw.png)

##### Note :
**1)In this simulator both the  demodulator blocks as well as output blocks for each sub category of Amplitude Modulation and Demodulation would be present, the difference between the blocks is that the function of the demodulator block would be to showcase the demodulated output  (input  message signal) and to provide the theoretical understanding of the concept, whereas the output block's main function is to showcase the demodulated waveform along with the extracted parameters from the process of amplitude modulation and demodulation such as   modulation index, total power and efficiency for each type of modulation.**

![Demod Block](./storyboard/demod.png)

![Output Block](./storyboard/out.png)


**2)As an added feature we have taken the liberty to display the output waveform for each stage so as to enhance the student's understanding on the function of blocks ,to view the output of any block at any time ,the user has to just click on the block which would then display the desired output to the user.**


**3)To alter the axis values for graphs during modulation scheme , the user just has to click on the Balanced Modulator block, Adder block and the filter block  after which the user should click on the graph tools and then avail the spanner icon option after which the user can input the new axis values for which the updated graph with new axis values would be displayed to the user.**

![mod-graph](./storyboard/amw.png)

![mod-graph](./storyboard/bp.png)

![mod-graph](./storyboard/bp1.png)

![mod-graph](./storyboard/bp2.png)

**4)To alter the axis values for graphs during demodulation scheme , the user just has to click on the any output block present in the workspace and then click on the graph tools and then avail the spanner icon option after which the user can input the new axis values for which the updated graphs with new axis values would be displayed to the user under each block present in the demodulation workspace(not including blocks in the modulation workspace).**

![demod graph](./storyboard/m1.png)

![demod graph](./storyboard/ot.png)

![demod graph](./storyboard/ot1.png)

![demod graph](./storyboard/ot2.png)

**5)Also as an added feature we have taken the liberty to create two new features move and delete whose function would help  in the movement of blocks across the workspace and delete any unnecessary blocks if need be.**

**6)To move a block the user must first choose the particular block via long press and then drag them to the desired position along the workspace pane under the edit mode .**

![Move](./storyboard/m1.png)

![Move](./storyboard/m3.png)

![Move](./storyboard/m2.png)

**7)To delete unwanted blocks the user must first choose the delete option  under the tool pane and then the user could select the particular blocks which need to be deleted .**

![Deletion](./storyboard/d1.png)

![Deletion](./storyboard/d2.png)

![Deletion](./storyboard/d3.png)


**8)During the verification of graphs if the user feels the expression pane to be a hindering their view of the entire view of the graph , then the user could perform the steps mentioned below to remove the same.**

![Expression pane](./storyboard/do1.png)

![Expression pane](./storyboard/do2.png)

![Expression pane](./storyboard/do3.png)



**9)During the verification of the output graphs the user would be redirected to a Formative Quiz where the user must answer the question in order to progress with later stages in  the simulation.**


##### **Example**
![Formative Quiz](./storyboard/q1.png)

**10)Also as an added feature we have taken the liberty to include the "Download Graph" option at each block ,which could be availed by the user so as to aid in calculations to be performed by the user and future references.**



![Download Graph](./storyboard/do1.png)

![Download Graph](./storyboard/do2.png)

![Download Graph](./storyboard/do3.png)

![Download Graph](./storyboard/do4.png)

![Download Graph](./storyboard/do5.png)

![Download Graph](./storyboard/do6.png)

![Download Graph](./storyboard/DSB-SCOP.png)
