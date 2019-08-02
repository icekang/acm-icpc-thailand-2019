<template>
  <div>
    <div id="content-icpc" class="container py-5 my-5">
      <h1
        style="font-size: 5em; color: #6b0000; font-family: Playfair Display, Times, serif;"
      >
        About ICPC
      </h1>
        <p style="font-size: 18px;">
            The International Collegiate Programming Contest is an algorithmic
            programming contest for college students. Teams of three, representing
            their university, work to solve the most real-world problems, fostering
            collaboration, creativity, innovation, and the ability to perform under
            pressure. Through training and competition, teams challenge each other
            to raise the bar on the possible. Quite simply, it is the oldest,
            largest, and most prestigious programming contest in the world.
        </p>
        <div  align='right' style='width: 100%'>
            <v-btn
                href="https://icpc.baylor.edu/regionals/abouticpc"
                target="_blank"
                depressed
                color="#6b0000"
                right
                dark
            >
                More
            </v-btn>
        </div>
    </div>
    <div id="content-chula-eng">
      <div class="container">
        <div align="right" style="width: 100%">
            <h1
                style="font-size: 5em; color: #6b0000; font-family: Playfair Display, Times, serif;"
            >
                About Host
            </h1>
            <v-flex md8>
                <p style="font-size: 18px;">
                Department of Computer Engineering, Faculty of Engineering,
                Chulalongkorn University is the first computer school in Thailand. The
                origin came from the Computer Science Unit of Graduate School which
                was the computer services unit inside Chulalongkorn University, and
                also educating computer science in the level of certificate and master
                degree. Later, the Computer Science Unit was transformed into the
                Department of Computer Engineering.
                </p>
            </v-flex>
        </div>
        <div class="pt-5" id="content-cu-eng">
          <img
            :src="require(`@/assets/cu-eng-logo.png`)"
            alt="Chula Engineering"
            width="70%"
            style="display: block; margin-left: auto; margin-right: auto;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
</style>