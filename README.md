# GoutApp
App to assist Gout sufferers


This app will use an existing database to help gout sufferers avoid flare-ups. 

It will use the data from this source:

https://www.jstage.jst.go.jp/article/bpb/37/5/37_b13-00967/_pdf/-char/en 

as a basis for discerning how likely to be gout-flare inducing a particular ingredient or recipe will be.

The app will use the Spoontacular API to check a given recipe's ingredients against the source table's data to discern based on the ingredients and their level of uric acid metabolites how gout inducing a recipe is. 


App Modes:

The app will then give a color-based rating:

      Green   - Zero to low uric acid metabolizing ingredients 

      Yellow  - Low to Medium uric acid content 

      Red     - Medium to High uric acid metabolizing ingredients


Mode 1 - Ingredient Check

      Enter Ingredient:
      
          Interogate database using API 
           If found:
             - Display actual metabolite information
             - Display ingredient type (Animal protein etc.)
             - Give color display rating 
             
           If not found:
             - Request Ingredient type. 
                      Search on Ingredient type 
                        If found: 
                                Relay findings 
                                Relay recommendation
                       Search google for name 
              
                                
                                
                                
                                
                                
             - 
             
             
