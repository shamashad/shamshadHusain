
export const optional = object => object || {};
export const optionalArray = object => object || [];

export class Optional {

	static ofNullable(object){
		return new OptionalObject(object);
	}
}

class OptionalObject {
	constructor(object){
		this.object = object;
	}

	map(callback){
		try{
			// 3. if error occurred before, pass error to next in chain
			if(this.error) {
				throw new Error();
			}
			// 1. will throw error when trying to get value from null or undefined
			return new OptionalObject(callback(this.object));
		}
		catch {
			// 2. pass error to next in chain
			return new OptionalObject().withError();
		}
	}

	withError(){
		this.error = true;
		return this;
	}

	orElse(value){
		// 4. if error occurred somewhere in the chain, return to default value
		return this.error ? value : this.object;
	}



}

