<template>
<v-container grid-list-md>
    <v-layout>
        <!-- <v-flex>单行单列布局</v-flex> -->
        <v-flex>
            <v-card color="pink">第一行第一列</v-card>
        </v-flex>
         <v-flex>
            <v-card color="pink">第一行第二列</v-card>
        </v-flex>
         <!-- <v-flex>
            <v-card color="green">第一行第3列</v-card>
        </v-flex> -->
    </v-layout>
    <v-layout>
        <!-- <v-flex>单行单列布局</v-flex> -->
        <v-flex>
            <v-card color="pink">第二行第一列</v-card>
        </v-flex>
         <v-flex>
            <v-card color="pink">第二行第二列</v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default{
    name:'Grid'
}
</script>