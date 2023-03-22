const { Configuration, OpenAIApi } = require('openai');

const promptly = require('promptly');
 
(async () => {
    const mess = await promptly.prompt('ecrire > ');
    
    const configuration = new Configuration({
        // organization:"org-b0IxU8JTwXm3Ds6bqJ2MxJc1",
        apiKey:'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'
    });
    
    const openai = new OpenAIApi(configuration);
    
    let waitResponse = async ()=>{
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: mess}],
          });
          let { content } = await completion.data.choices[0].message;
          console.log('\n GPT: ',content);
    }
    
    waitResponse();
})();



