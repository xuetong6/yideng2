import indexModel from '../models/indexModel'
const indexController = {
	index(){
		return async(ctx,next)=>{
			ctx.body = await ctx.render('index.html')
		}
	},
	update(){
		return async(ctx,next)=>{
		  const indexM = new indexModel();
		  ctx.body = await indexM.updateNum();
		}
	}
}
export default indexController