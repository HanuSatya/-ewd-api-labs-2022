import Account from '../entities/Account';

  export default {

    authenticate: async (email, password, {accountsRepository, authenticator}) => {
      const account = await accountsRepository.getByEmail(email);
      const result = await authenticator.compare(password, account.password);
      if (!result) {
          throw new Error('Bad credentials');
      }
      const token = JSON.stringify({ email: account.email });//JUST Temporary!!! TODO: make it better
      return token;
    },
    
    registerAccount: async  (firstName, lastName, email, password, {accountsRepository}) => {
      const account = new Account(undefined, firstName, lastName, email, password);
      return accountsRepository.persist(account);
    },

    getAccount: (accountId, {accountsRepository}) => {
      return accountsRepository.get(accountId);
    },

    updateAccount: (id, firstName, lastName, email, password, {accountsRepository})=>{
      const account = new Account(undefined, id, firstName, lastName, email, password);
      return accountsRepository.persist(account);   
    },

    find: ({accountsRepository})=>{
      return accountsRepository.find();
    },

    findByEmail: (email, {accountsRepository})=>{
      return accountsRepository.getByEmail(email);
    }
  };